import React from 'react';
import type { BlogPost } from '../types';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  const imageRegex = /!\[(.*?)\]\((.*?)\)/;
  
  const contentParagraphs = post.content.split('\n\n').map((paragraph, index) => {
    const trimmed = paragraph.trim();
    if (trimmed.length === 0) return null;

    // Check for image syntax
    const imageMatch = trimmed.match(imageRegex);
    if (imageMatch) {
      const [, alt, src] = imageMatch;
      return (
        <img
          key={index}
          src={src}
          alt={alt}
          className="w-full h-auto object-cover rounded-xl shadow-md my-8"
        />
      );
    }

    // Check for H2 markdown
    const h2Match = trimmed.match(/^## (.*)/);
    if (h2Match) {
      return <h2 key={index} className="text-2xl md:text-3xl font-bold font-heading text-title-blue my-8">{h2Match[1]}</h2>
    }
    
    // Check for H3 markdown
    const h3Match = trimmed.match(/^### (.*)/);
    if (h3Match) {
      return <h3 key={index} className="text-xl md:text-2xl font-bold font-heading text-dark-slate my-6">{h3Match[1]}</h3>
    }

    // Check for list items (bulleted or numbered)
    const listItemMatch = trimmed.match(/^(?:(•|\*|\-|\d+\.))\s+(.*)/s);
    if (listItemMatch) {
        let [, prefix, content] = listItemMatch;
        // Normalize bullet prefixes
        if (['•', '*', '-'].includes(prefix)) {
            prefix = '•';
        }

        const parts = content.split('**');
        const parsedContent = parts.map((part, i) => {
            if (i % 2 === 1) { // Odd parts are bold
                return <strong key={i}>{part}</strong>;
            }
            return part; // Even parts are regular text
        });

        return (
            <div key={index} className="flex items-start mb-4 text-lg text-dark-slate">
                <span className="text-dark-slate mr-3 mt-1 flex-shrink-0 w-8 text-left font-semibold">{prefix}</span>
                <p className="flex-1 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{parsedContent}</p>
            </div>
        );
    }

    // Check for emoji-prefixed numbered headings
    const emojiNumberedListRegex = /^(🏄‍♂️|🧘‍♂️|🌅|🏖️|🍍|🌍|📸|💫|🧭|🌺)\s+\d+\./;
    if (emojiNumberedListRegex.test(trimmed)) {
        return <h3 key={index} className="text-xl font-bold text-dark-slate my-6">{paragraph}</h3>;
    }

    // Handle specially-styled/bolded paragraphs
    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        const text = trimmed.substring(2, trimmed.length - 2);
        return <p key={index} className="mb-6 leading-relaxed text-lg text-dark-slate"><strong>{text}</strong></p>;
    }
    
    return (
      <p key={index} className="mb-6 leading-relaxed text-lg text-dark-slate" style={{ whiteSpace: 'pre-line' }}>
        {paragraph}
      </p>
    );
  });


  return (
    <article className="bg-white py-12 md:py-20 animate-page-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        <button
          onClick={onBack}
          className="inline-flex items-center text-ocean-blue font-normal font-magilio mb-8 hover:underline text-xl"
          aria-label="Back to blog list"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </button>

        <h1 className="text-4xl md:text-5xl font-bold font-heading text-title-blue mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-500 mb-8">
          <span>By {post.author}</span>
          <span className="mx-3" aria-hidden="true">•</span>
          <span>{post.date}</span>
        </div>

        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg mb-12"
        />

        <div>
          {contentParagraphs}
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;