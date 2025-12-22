
import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Plane, Program, Mesh, Texture } from 'https://cdn.jsdelivr.net/npm/ogl@0.0.116/dist/ogl.mjs';

interface GalleryItem {
  headline: string;
  body: string;
  imageUrl: string;
}

interface CircularGalleryProps {
  items: GalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  scrollEase?: number;
}

const vertexShader = `
    attribute vec3 position;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform float uTime;
    uniform float uSpeed;
    uniform float uBend;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        vec3 pos = position;
        
        // Wave deformation based on speed and time
        float wave = sin(pos.x * 2.0 + uTime * 4.0) * uSpeed * 0.12;
        pos.z += wave;
        
        // Circular/Arc bend layout
        float xDist = modelViewMatrix[3][0] + pos.x;
        pos.z += pow(xDist, 2.0) * uBend * -0.04;
        pos.y -= pow(xDist, 2.0) * uBend * 0.02;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fragmentShader = `
    precision highp float;

    uniform sampler2D tMap;
    uniform float uOpacity;
    uniform float uGrayscale;
    uniform float uRadius;

    varying vec2 vUv;

    float roundedBox(vec2 p, vec2 b, float r) {
        vec2 d = abs(p) - b + r;
        return length(max(d, 0.0)) - r;
    }

    void main() {
        vec4 tex = texture2D(tMap, vUv);
        
        // The image part is the top 80% of the texture
        // The label part is the bottom 20%
        // We only apply grayscale/rounded corners to the image part
        
        float isImage = step(0.2, vUv.y);
        
        vec3 color = tex.rgb;
        if (isImage > 0.5) {
            float gray = dot(color, vec3(0.299, 0.587, 0.114));
            color = mix(color, vec3(gray), uGrayscale);
            
            // Rounded corners mask for the image area
            vec2 p = vec2(vUv.x, (vUv.y - 0.2) / 0.8) - 0.5;
            float mask = roundedBox(p, vec2(0.5, 0.5), uRadius);
            float alpha = 1.0 - smoothstep(0.0, 0.01, mask);
            gl_FragColor = vec4(color, alpha * uOpacity);
        } else {
            // Label area - keeping it simple and transparent
            gl_FragColor = vec4(color, tex.a * uOpacity);
        }
    }
`;

class Media {
  mesh: Mesh;
  width: number;
  extra: number;

  constructor({ gl, geometry, scene, index, item, total, itemWidth, bend, borderRadius, textColor }: any) {
    this.width = itemWidth;
    this.extra = 0;

    // Create a canvas to combine image and text
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = 512;
    canvas.height = 640; // Taller to accommodate text below

    const texture = new Texture(gl, { generateMipmaps: false });
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = item.imageUrl;
    img.onload = () => {
      // Draw image on top 80%
      ctx.drawImage(img, 0, 0, 512, 512);
      
      // Draw text on bottom 20%
      ctx.fillStyle = textColor;
      ctx.font = 'bold 36px Magilio';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.headline.toUpperCase(), 256, 576);
      
      texture.image = canvas;
    };

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        tMap: { value: texture },
        uTime: { value: 0 },
        uSpeed: { value: 0 },
        uBend: { value: bend },
        uOpacity: { value: 1 },
        uGrayscale: { value: 1 },
        uRadius: { value: borderRadius }
      },
      transparent: true
    });

    this.mesh = new Mesh(gl, { geometry, program });
    this.mesh.position.x = index * this.width;
    scene.addChild(this.mesh);
  }

  update(scroll: any, totalWidth: number, time: number) {
    this.mesh.position.x = (this.mesh.position.x + scroll.velocity) % totalWidth;
    
    // Virtual position for infinite wrap
    let x = this.mesh.position.x + scroll.current;
    const half = totalWidth / 2;
    x = ((x + half) % totalWidth);
    if (x < 0) x += totalWidth;
    x -= half;

    this.mesh.position.x = x;
    this.mesh.rotation.y = -x * 0.12;
    
    // Update uniforms
    this.mesh.program.uniforms.uTime.value = time;
    this.mesh.program.uniforms.uSpeed.value = Math.abs(scroll.velocity) * 5.0;
    this.mesh.program.uniforms.uGrayscale.value = Math.min(Math.abs(x) * 0.5, 0.8);
  }
}

const CircularGallery: React.FC<CircularGalleryProps> = ({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  scrollEase = 0.02
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scroll = useRef({ current: 0, target: 0, last: 0, velocity: 0 });
  const mouse = useRef({ isDown: false, lastX: 0 });
  const medias = useRef<Media[]>([]);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const renderer = new Renderer({ canvas: canvasRef.current, antialias: true, alpha: true, dpr: window.devicePixelRatio });
    const gl = renderer.gl;
    const camera = new Camera(gl, { fov: 45 });
    camera.position.z = 5;
    const scene = new Transform();
    const geometry = new Plane(gl, { width: 1.6, height: 2, widthSegments: 40, heightSegments: 40 });

    const itemWidth = 2.2;
    // Duplicate items for a seamless loop
    const galleryItems = [...items, ...items];
    const totalWidth = galleryItems.length * itemWidth;

    medias.current = galleryItems.map((item, index) => new Media({
      gl, geometry, scene, index, item, 
      total: galleryItems.length, 
      itemWidth, bend, borderRadius, textColor
    }));

    const handleResize = () => {
      const width = containerRef.current!.clientWidth;
      const height = containerRef.current!.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
    };

    const onMouseDown = (e: any) => {
      mouse.current.isDown = true;
      mouse.current.lastX = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const onMouseMove = (e: any) => {
      if (!mouse.current.isDown) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (x - mouse.current.lastX) * 0.01;
      scroll.current.target += delta;
      mouse.current.lastX = x;
    };

    const onMouseUp = () => mouse.current.isDown = false;
    const onWheel = (e: WheelEvent) => scroll.current.target -= e.deltaY * 0.001;

    window.addEventListener('resize', handleResize);
    containerRef.current.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    containerRef.current.addEventListener('touchstart', onMouseDown, { passive: true });
    window.addEventListener('touchmove', onMouseMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);
    containerRef.current.addEventListener('wheel', onWheel, { passive: true });

    handleResize();

    let request: number;
    const update = (time: number) => {
      request = requestAnimationFrame(update);
      
      const t = time * 0.001;
      scroll.current.current += (scroll.current.target - scroll.current.current) * scrollEase;
      scroll.current.velocity = (scroll.current.current - scroll.current.last);
      scroll.current.last = scroll.current.current;

      medias.current.forEach(m => m.update(scroll.current, totalWidth, t));
      
      renderer.render({ scene, camera });
    };

    request = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onMouseMove);
      window.removeEventListener('touchend', onMouseUp);
      cancelAnimationFrame(request);
      if (gl.getExtension('WEBGL_lose_context')) gl.getExtension('WEBGL_lose_context').loseContext();
    };
  }, [items, bend, borderRadius, scrollEase, textColor]);

  return (
    <div ref={containerRef} className="circular-gallery">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default CircularGallery;
