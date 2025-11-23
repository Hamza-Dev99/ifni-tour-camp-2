
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PackagesPage from './components/Packages';
import BlogPostPage from './components/BlogPostPage';
import Accommodation from './components/Accommodation';
import Activities from './components/Activities';
import ShopPage from './components/ShopPage'; // Import the new ShopPage component
import SurfPage from './components/SurfPage'; // Import the new SurfPage component
import YogaPage from './components/YogaPage'; // Import the new YogaPage component
import type { Coach, Package, BlogPost, AccommodationService, ShopProduct } from './types';

declare var AOS: any;

// --- LOADING COMPONENTS ---
const Spinner: React.FC = () => (
  <div className="w-12 h-12 border-4 border-booking-yellow border-solid border-t-transparent rounded-full animate-spin" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

const BlogCardSkeleton: React.FC = () => (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden animate-pulse">
        <div className="bg-gray-300 dark:bg-gray-700 h-56 w-full"></div>
        <div className="p-6">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
            <div className="flex items-center text-sm">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
        </div>
    </div>
);


// --- DATA ---
const coaches: Coach[] = [
    {
        name: 'Youssef',
        title: 'Head Coach & Founder',
        bio: 'With 15 years on these waves, Youssef founded Ifni Surf to share his deep passion for the ocean and Moroccan hospitality.',
        imageUrl: 'https://i.postimg.cc/k5YF7rN1/p1.jpg',
    },
    {
        name: 'Fatima',
        title: 'Yoga & Surf Instructor',
        bio: 'Fatima believes in the synergy of mind and water. She guides you to find balance on and off the board through yoga and surf.',
        imageUrl: 'https://i.postimg.cc/W191sK3z/p2.jpg',
    },
    {
        name: 'Khalid',
        title: 'Local Guide & Spot Expert',
        bio: 'Born and raised in Sidi Ifni, Khalid knows every secret spot and hidden gem. He ensures you get a truly authentic, tailored experience.',
        imageUrl: 'https://i.postimg.cc/Pq06k52y/p3.jpg',
    }
];

const vibeImages = [
  { src: 'https://picsum.photos/seed/vibe1/800/600', alt: 'Lush green forest path under a blue sky', className: 'md:col-span-2' },
  { src: 'https://picsum.photos/seed/vibe2/800/600', alt: 'Close-up of a turntable spinning a vinyl record' },
  { src: 'https://picsum.photos/seed/vibe3/800/600', alt: 'Misty coastal cliffs overlooking the sea' },
  { src: 'https://picsum.photos/seed/vibe4/800/600', alt: 'People gathered in a warmly lit bar scene' },
  { src: 'https://picsum.photos/seed/vibe5/800/600', alt: 'Pink and purple silhouetted sunset over a mountain ridge' },
  { src: 'https://picsum.photos/seed/vibe6/800/600?grayscale', alt: 'Black and white photo of the Brooklyn Bridge at night' },
  { src: 'https://picsum.photos/seed/vibe7/800/600?grayscale', alt: 'Black and white photo of an ethereal sea of clouds over hills' },
];

const packages: Package[] = [
  {
    name: 'Beginner Level',
    duration: '7 Days / 6 Nights',
    level: '',
    features: [
      'Shared Accommodation',
      'Daily Breakfast & Dinner',
      '5x Surf Lessons (2h)',
      'Full Surf Equipment Rental',
      'Sidi Ifni City Tour',
      'Free Wifi'
    ],
  },
  {
    name: 'Pro Rider',
    price: '€650',
    duration: '7 Days / 6 Nights',
    level: 'Intermediate/Advanced Level',
    features: [
      'Private Room Accommodation',
      'All Meals Included',
      'Daily Guided Surf Sessions',
      'Advanced Technique Coaching',
      'Video Analysis Sessions',
      'Airport Transfer (Agadir)',
      'Yoga Session'
    ],
    highlight: true,
  },
  {
    name: 'All Levels Level',
    duration: '7 Days / 6 Nights',
    level: '',
    features: [
      'Shared Accommodation',
      'Daily Breakfast',
      'Board & Wetsuit Rental',
      'Spot Transfers',
      'Local guidance & tips'
    ],
  }
];

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Why You Should Try a Surf and Yoga Camp This Summer',
        excerpt: 'More than just a beach vacation, a surf and yoga camp transforms your body and mind. Discover the perfect balance of energy and calm, and why it might be the best thing you do for yourself this summer.',
        imageUrl: 'https://i.postimg.cc/7YW5M5WX/img.webp',
        author: 'Youssef',
        date: 'October 26, 2023',
        content: `## More Than Just a Beach Vacation

When you imagine the perfect summer getaway, what comes to mind? Maybe soft sand, warm sunsets, and waves rolling in. But what if your trip could give you more than just relaxation — what if it could transform your body and mind?

That’s exactly what a surf and yoga camp offers. It’s a place where you can challenge yourself, reconnect with nature, and find balance — all while having the time of your life. Whether you’re a beginner or just looking for a healthy break, this combination is pure magic.

Let’s dive into why a surf and yoga camp might just be the best thing you do for yourself this summer.

### 1. A Perfect Balance Between Energy and Calm

Surfing and yoga might seem like opposites — one full of adrenaline, the other peaceful and still. But together, they create a beautiful balance.

• Surfing builds strength, coordination, and focus.

• Yoga improves flexibility, breathing, and inner calm.

After a morning catching waves, yoga helps your muscles recover and keeps your mind centered. This balance of energy and calm is what makes surf and yoga camps truly unique.

### 2. Yoga Improves Your Surfing Skills (And Vice Versa)

Many professional surfers practice yoga for a reason — it works!

• Yoga helps improve balance, which is crucial for standing on your board.

• It teaches breath control, helping you stay calm when you wipe out or face a big wave.

• Surfing, on the other hand, strengthens your core and stamina, which enhances your yoga practice.

Together, they make you stronger, more focused, and more connected to your body.

### 3. The Ultimate Way to Disconnect from Stress

In our fast-paced world, we’re constantly connected — emails, notifications, deadlines. A surf and yoga camp is your chance to hit pause.

Most camps are located in stunning natural spots — think Bali, Costa Rica, Morocco, or Portugal. You wake up with the sunrise, practice yoga by the beach, surf during the day, and fall asleep to the sound of the ocean.

No stress. No rush. Just pure presence. 🌺

### 4. A Supportive Community of Like-Minded People

One of the best parts of joining a surf and yoga camp is the people you’ll meet. Everyone is there for the same reason — to grow, relax, and enjoy life.

You’ll share meals, surf sessions, and laughter with people from all over the world. It’s not just a trip — it’s a community experience. Many travelers leave camp with new friends (and sometimes, life-changing connections).

### 5. Nourishing Food and Healthy Lifestyle

Surf and yoga camps usually include healthy, local meals — fresh fruits, smoothie bowls, grilled fish, and plant-based options.

The food is designed to fuel your body for surfing while keeping you light and energized for yoga. You’ll probably leave camp feeling healthier, stronger, and more vibrant than when you arrived.

### 6. You Don’t Need to Be an Expert

Worried you’ve never surfed or tried yoga before? Don’t be.

Most surf and yoga camps are beginner-friendly. You’ll have patient instructors who guide you step by step, whether it’s your first time on a surfboard or your first downward dog. The goal isn’t perfection — it’s progress and fun.

### 7. You’ll Create Memories That Last a Lifetime

Imagine this: You’re sitting on your board, waiting for the next wave, watching the sunset paint the sky orange and pink. Later that night, you join a group bonfire, laughing with new friends under the stars.

That’s what surf and yoga camps are all about — unforgettable experiences that feed your soul. You’ll return home refreshed, stronger, and maybe even a little transformed.

### 8. A Sustainable Way to Travel

Many surf and yoga camps follow eco-friendly practices — from plastic-free policies to locally sourced food and solar-powered facilities. By joining one, you’re supporting responsible tourism and protecting the environment you enjoy so much.

### 9. Popular Surf & Yoga Camp Destinations

If you’re wondering where to go this summer, here are some of the most popular spots:

• Bali, Indonesia: Lush nature, warm waves, and spiritual vibes.

• Taghazout, Morocco: Year-round surf, ocean-view yoga decks, and rich culture.

• Costa Rica: Jungle meets the ocean — pura vida style!

• Portugal: Stunning coastlines, friendly locals, and great surf schools.

• Sri Lanka: Calm waves and peaceful yoga retreats by the beach.

Each destination has its own charm — it just depends on your mood and travel goals.

### 10. The Perfect Gift to Yourself

In a world that’s always demanding more, taking time for yourself is the best investment you can make. A surf and yoga camp gives you space to reconnect, recharge, and rediscover your inner peace.

So this summer, skip the usual vacation. Instead, choose something that feeds your soul and transforms your body.

You deserve it. 🌞🌊`
    },
    {
        id: '2',
        title: 'Top 10 Surf Camps Around the World for Beginners',
        excerpt: 'Dreaming of catching your first wave? Discover the best surf camps for beginners in Bali, Portugal, Costa Rica, Morocco, and more. Your ultimate guide to learning to surf.',
        imageUrl: 'https://i.postimg.cc/Vs4c6wqm/img.webp',
        author: 'Fatima',
        date: 'October 15, 2023',
        content: `## Why Join a Surf Camp as a Beginner

Starting your surfing journey can feel both exciting and overwhelming. You might wonder where to go, what equipment to use, and how to catch your first real wave. That’s where surf camps for beginners come in — they offer the perfect environment to learn safely, meet other surfers, and improve faster with expert coaching.

Whether you’re dreaming of Bali, Portugal, Costa Rica, or Morocco, there’s a surf camp out there designed just for you. Let’s dive into the 10 best surf camps around the world for beginners!

### 1. Dreamsea Surf Camp – Bali, Indonesia

**Why it’s great:**

Bali is one of the most famous surf destinations in the world, and Dreamsea Surf Camp makes it beginner-friendly. The waves at Canggu are soft and consistent, ideal for new surfers.

**Extra perks:**

Daily yoga sessions, tropical breakfasts, and beachfront bungalows make it a dream escape.

### 2. Rapture Surf Camp – Lisbon, Portugal

**Perfect for:**

Europeans looking for an affordable surf trip. With its warm waters and mellow waves, Lisbon’s coastline is perfect for learning. Rapture offers certified instructors, small class sizes, and social evenings where you connect with other travelers.

### 3. Surf Simply – Nosara, Costa Rica

**Known for:**

High-quality coaching and professionalism. Surf Simply focuses on real progress. Each student receives video feedback and personalized surf theory lessons — perfect for beginners who want to truly understand the sport.

### 4. Solid Surf & Yoga Camp – Taghazout, Sidi Ifni, Morocco

**Perfect mix:**

Surf, sun, and culture. Taghazout is Morocco’s surfing capital, offering gentle beach breaks and friendly locals. This camp combines surf lessons with yoga, ideal for improving balance, flexibility, and focus. Sidi Ifni is a prominent destination for group surfing and has many famous sporting models that attract athletes and tourists from all over the world.

### 5. Star Surf Camps – Fuerteventura, Canary Islands

**Best for:**

All-year-round sunshine. The Canary Islands have some of the most consistent waves in Europe. Star Surf Camp provides beginner lessons, surf theory workshops, and a fun, youthful vibe.

### 6. Green Lagoon Surf Camp – Tamarindo, Costa Rica

**What makes it special:**

Tamarindo is a beginner’s paradise with warm waters and forgiving waves. The camp offers group lessons, eco-friendly lodging, and surfboards included in every package.

### 7. Pura Vida Surf Camp – Santa Teresa, Costa Rica

**Highlights:**

Friendly instructors and local experience. Santa Teresa has small beach breaks that are ideal for first-timers. The camp also organizes yoga, bonfire nights, and waterfall trips — making it a full experience, not just a lesson.

### 8. Kima Surf Camp – Canggu, Indonesia

**Why beginners love it:**

Kima combines comfort and adventure. You get unlimited surf sessions per day, plus guided video analysis to track your progress. The instructors make sure you feel confident in the water.

### 9. The Surf Experience – Lagos, Portugal

**Great for:**

Solo travelers. This camp has been running since the ’90s and is known for its community atmosphere. You’ll surf beautiful beaches in the Algarve, enjoy BBQ nights, and make friends from all over the world.

### 10. La Point Surf Camp – Sri Lanka

**Tropical vibes + calm waves = perfect combo.**

La Point offers surf packages tailored to all levels. The waves at Weligama Bay are gentle and long, giving beginners enough time to stand up and enjoy the ride. Add palm trees and yoga — and you’ve got paradise.

## Tips for Choosing Your First Surf Camp

• Check reviews on Google or TripAdvisor before booking.

• Ask about student-to-instructor ratio. Fewer students means more attention.

• Look for camps offering video analysis. It helps you learn faster.

• Don’t skip yoga sessions. They improve flexibility and balance.

• Go with an open mind. The best surf trips are about connection, not perfection.

## Why Surf Camps Are the Best Way to Learn

Surf camps aren’t just about catching waves — they’re about community. You’ll live, eat, and laugh with other surfers who share the same passion. You’ll wake up early for sunrise surf, practice mindfulness through yoga, and fall asleep to the sound of the ocean.

The progress you’ll make in one week at a surf camp for beginners often equals months of solo surfing. The combination of coaching, routine, and positive vibes makes all the difference.

Choosing the right surf camp can completely change your surfing journey. Whether you head to Bali, Morocco, or Costa Rica, remember that every wave is a new chance to learn.

So grab your board, your sunscreen, and a sense of adventure — your next wave is waiting!`
    },
    {
        id: '3',
        title: 'The Ultimate Guide to Planning Your First Surf Camp Experience',
        excerpt: 'Planning your first surf camp trip? Discover everything you need to know — from choosing the right camp and packing the essentials to making the most of your first surfing experience.',
        imageUrl: 'https://i.postimg.cc/gcy5ZRnh/img.webp',
        author: 'Khalid',
        date: 'September 28, 2023',
        content: `## The Start of a New Adventure

Going to your first surf camp is more than just a vacation — it’s the beginning of a new lifestyle. Surf camps are designed for people who want to learn surfing in a structured, fun, and safe environment. Whether you’re heading to Bali, Morocco, or Portugal, your experience will be shaped by the choices you make before you even hit the waves.

This guide will help you plan your first surf camp step by step, so you can enjoy the ocean, learn faster, and create lasting memories.

### 1. Choose the Right Destination

Your first step is to decide where you want to go. The best surf camps for beginners are usually located in warm places with soft, consistent waves. Here are a few top destinations:

• Bali, Indonesia: Known for gentle beach breaks and an amazing surf culture.

• Taghazout, Morocco: A mix of sun, culture, and beginner-friendly waves.

• Portugal: Affordable, accessible, and great for first-time surfers.

• Costa Rica: Laid-back atmosphere and consistent surf conditions.

When choosing your location, consider travel distance, weather, cost, and local culture. Each spot offers a different vibe, but all share the same goal — helping you fall in love with surfing.

### 2. Find a Camp That Matches Your Skill Level

Not all surf camps are the same. Some focus on absolute beginners, while others cater to more advanced surfers. Before booking, check:

• Lesson structure: Does the camp include daily lessons with professional instructors?

• Group size: Smaller classes mean more personal attention.

• Equipment: Are surfboards and wetsuits provided?

• Extras: Some camps offer yoga, fitness sessions, or surf theory workshops.

If it’s your first time, look for a camp that specifically mentions “surf camp for beginners” in its description.

### 3. Plan the Right Time to Go

Timing is everything in surfing. Some destinations have ideal seasons for beginners, while others can be rough during certain months.

• Bali: April to October — dry season and consistent waves.

• Morocco: September to April — smaller, friendly waves for learners.

• Portugal: May to September — warm weather and great surf conditions.

• Costa Rica: November to April — beginner-friendly beach breaks.

Before you book, research the best time for your chosen destination to ensure good waves and pleasant weather.

### 4. Pack Smart for Your Surf Camp

Packing for a surf camp isn’t like packing for a regular vacation. You’ll need the right gear and clothing for both surfing and relaxing.

Essential items to bring:

• Swimsuits and quick-dry clothes

• Reef-safe sunscreen (very important!)

• Hat, sunglasses, and flip-flops

• Beach towel and reusable water bottle

• Surf wax (if not provided)

• Yoga mat (if the camp includes yoga)

• A small first aid kit

Most surf camps provide boards and wetsuits, but it’s always good to double-check before you go.

### 5. Set Realistic Expectations

Surfing looks easy when you watch professionals, but it takes time to learn. Don’t get frustrated if you fall off the board — it’s part of the process.

In your first few days, you’ll learn how to:

• Paddle and position yourself correctly

• Catch small whitewater waves

• Stand up on the board

• Practice balance and timing

Remember, everyone starts as a beginner. The goal of your first surf camp isn’t perfection — it’s progress and enjoyment.

### 6. Take Care of Your Body

Surfing uses muscles you may not use every day, especially your shoulders, arms, and core. To avoid soreness and fatigue:

• Stretch before and after sessions

• Stay hydrated throughout the day

• Eat healthy, energy-rich meals

• Join yoga or mobility sessions if available

Taking care of your body ensures you get the most out of your lessons and recover faster between surf sessions.

### 7. Embrace the Surf Camp Lifestyle

Surf camps are more than just lessons — they’re about community and connection. You’ll meet travelers from all over the world who share your passion for the ocean.

Be open to new experiences:

• Participate in group dinners and activities

• Try local food

• Explore the nearby town or beach

• Wake up early for sunrise surf sessions

The more you immerse yourself, the more unforgettable your surf camp experience will be.

### 8. Learn the Basics of Surf Etiquette

Respect is an important part of surf culture. Even as a beginner, it’s good to know a few simple rules:

• Don’t drop in on someone else’s wave

• Always hold onto your board

• Be aware of your surroundings in the water

• Respect the local surfers and instructors

Good manners in the lineup create a safe and friendly environment for everyone.

### 9. Capture Memories, But Stay Present

It’s tempting to record every wave and every sunset, but don’t forget to live in the moment. Enjoy the feeling of being in the water, the energy of the ocean, and the peace that comes after a great session.

Take some photos, sure — but let the best moments stay in your memory, not just your camera roll.

### 10. After Camp: Keep Surfing

Your first surf camp is just the beginning. Once you’ve experienced the joy of catching waves, you’ll probably want to continue.

You can:

• Take lessons at a local beaches

• Practice your paddling and balance at home

• Join another surf camp next season

Surfing is a lifelong journey, and your first surf camp will always be a special part of it.

## Conclusion

Planning your first surf camp experience can seem overwhelming, but with the right preparation, it becomes one of the most rewarding adventures of your life. Choose the right destination, pack wisely, stay patient, and most importantly — have fun.

Every surfer starts somewhere, and your journey begins the moment you step into the ocean.`
    },
    {
        id: '4',
        title: 'How Surf Camps Help You Improve Faster Than Solo Surfing',
        excerpt: 'Discover why surf camps accelerate your learning curve far more than solo surfing. From professional coaching and structured lessons to the power of community, find out how to progress faster and build confidence in the water.',
        imageUrl: 'https://i.postimg.cc/ryH1qG6g/img.webp',
        author: 'Admin',
        date: 'September 10, 2023',
        content: `## Why Learning Alone Can Be Slow

Surfing is one of the most rewarding sports, but it can also be one of the most challenging, especially if you try to learn on your own. Without guidance, beginners often struggle with positioning, timing, and technique. Progress can be slow, and frustration may build.

This is where surf camps shine. They provide structured learning, experienced instructors, and a supportive environment that allows you to improve faster than surfing solo. In this article, we explore why surf camps are so effective and how they can help you reach your goals in the water.

### 1. Professional Coaching Speeds Up Learning

One of the main advantages of a surf camp is access to professional instructors. These experts:

• Identify and correct mistakes immediately

• Teach proper paddling techniques and wave selection

• Offer personalized tips based on your skill level

• Provide feedback that helps you improve efficiently

Instead of learning by trial and error, you receive targeted guidance that accelerates your progress.

### 2. Structured Lessons for Consistent Improvement

Surf camps typically offer a structured schedule that balances practice and theory:

• Daily surf sessions with clear objectives

• On-land training to understand wave mechanics

• Video analysis to review your technique

• Group workshops to discuss common mistakes

This structure ensures that you practice the right skills repeatedly, which is essential for rapid improvement.

### 3. Immediate Feedback Makes a Difference

When surfing alone, it’s easy to repeat mistakes without realizing it. At a surf camp, instructors give instant feedback, helping you:

• Stand up correctly on your first few waves

• Position yourself for catching waves efficiently

• Adjust your balance and body posture

• Build confidence in the water

Instant correction prevents bad habits from forming and accelerates learning significantly.

### 4. Learn from Other Surfers

Surf camps are not only about instructors. Being surrounded by other learners is incredibly beneficial:

• Observe techniques used by peers

• Share tips and encouragement

• Motivate each other to push limits

• Participate in friendly competitions and challenges

This community-based learning adds a social element that is often missing when surfing alone.

### 5. Safety and Comfort Accelerate Confidence

Feeling safe in the water is essential for learning. Surf camps provide:

• Monitored sessions in beginner-friendly waves

• Proper safety gear like life vests or soft-top boards

• Knowledge of local conditions, tides, and currents

• Experienced instructors ready to assist at all times

When you feel safe, you can focus on learning, not worrying about risks. Confidence grows faster, which leads to faster skill acquisition.

### 6. Yoga and Fitness Complement Surfing

Many surf camps include yoga or fitness sessions, which directly improve your surfing performance:

• Yoga enhances flexibility and balance

• Core-strength exercises improve paddling and stability

• Breathing techniques from yoga help manage fatigue

• Mental focus and mindfulness translate to better wave selection

This holistic approach helps you progress faster than if you only practiced surfing alone.

### 7. Access to Ideal Surfing Conditions

Choosing the right location is critical for learning quickly. Surf camps select beaches with:

• Consistent, gentle waves suitable for beginners

• Shallow, sandy bottoms for safety

• Fewer crowds to allow repeated practice

• Clean, natural environments to enhance focus

By learning in the right conditions, you can gain experience faster than struggling alone in unpredictable waves.

### 8. Motivation and Accountability

Learning solo requires self-discipline, which can be difficult to maintain. Surf camps naturally create:

• Daily schedules to keep you on track

• Group energy that motivates you to practice

• Small goals and challenges for measurable progress

• Supportive community to encourage persistence

This accountability ensures you stay committed and make consistent improvements.

### 9. Video Analysis and Personal Progress Tracking

Many surf camps use technology to track your development:

• Record your surfing sessions with video

• Review footage with instructors

• Identify small technical adjustments for faster improvement

• Set goals based on visual feedback

This method is far more effective than guessing what went wrong while surfing alone.

### 10. Creating a Positive Learning Mindset

Finally, surf camps cultivate the right mindset:

• Embrace mistakes as learning opportunities

• Celebrate small achievements to build confidence

• Foster resilience in challenging conditions

• Encourage curiosity and experimentation

This mental approach allows beginners and intermediate surfers to progress faster and enjoy the process fully.

## Conclusion
Surf camps offer a structured, safe, and supportive environment that helps you improve faster than surfing alone. From expert coaching and structured lessons to yoga sessions and community support, these camps provide everything a beginner or intermediate surfer needs to succeed.

If your goal is to learn efficiently, gain confidence, and truly enjoy your surfing journey, joining a surf camp is the fastest path to improvement.`
    },
    {
        id: '5',
        title: 'Surf Camp Packing List: What You Really Need to Bring',
        excerpt: 'Planning a surf camp trip? Discover the ultimate surf camp packing list with everything you need — surfboards, clothing, accessories, and tips to make your first surf experience smooth and enjoyable.',
        imageUrl: 'https://i.postimg.cc/Z5v2tfVC/img.webp',
        author: 'Youssef',
        date: 'November 02, 2023',
        content: `## The Ultimate Surf Camp Packing List

Packing for your first surf camp can be exciting, but it's easy to forget the essentials. This checklist will ensure you have everything you need for an unforgettable trip, from what to wear in the water to what to pack for your downtime. Let's dive in!

### Surf Gear & Equipment

While most camps provide the basics, it's good to check what's included. Here are some essentials for the water.

*   **Surfboards & Wetsuits:** Most beginner camps provide these. If you have your own gear you love, check with the camp if you can bring it.

*   **Reef-Safe Sunscreen:** Protect your skin and the ocean. A high-SPF, water-resistant sunscreen is a must. Don't forget a zinc stick for your face!

*   **Rash Guard:** A good rash guard will protect you from the sun and prevent board rash.

*   **Board Shorts / Swimsuit:** Bring at least two so you always have a dry one ready.

*   **Surf Wax:** The camp will likely have this, but it's small and good to have your own preferred temperature wax.

*   **Leash:** Your camp will provide this with the board, but a spare is never a bad idea for longer trips.

*   **FCS Key:** For changing fins.

### Clothing & Apparel

You'll be spending a lot of time in swimwear, but you'll need clothes for evenings and other activities.

*   **Lightweight T-shirts & Tank Tops:** A few comfortable tops are essential.

*   **Shorts & Skirts:** Easy to throw on over a swimsuit.

*   **A Warm Hoodie or Sweater:** Even in tropical locations, evenings can get cool, especially by the ocean.

*   **Lightweight Long Pants or Jeans:** Good for cooler nights or for visiting local towns.

*   **Underwear & Socks:** Pack enough for your trip.

*   **Pajamas:** Something comfortable for sleeping.

*   **A Hat & Sunglasses:** Protect yourself from the sun when you're out of the water.

### Footwear

*   **Flip-flops or Sandals:** Your daily go-to footwear.

*   **Comfortable Shoes or Sneakers:** For travel days, exploring, or any non-beach activities.

### Toiletries & Health

*   **Basic Toiletry Kit:** Toothbrush, toothpaste, soap, shampoo, conditioner, etc.

*   **After-Sun Lotion or Aloe Vera:** Your skin will thank you after a long day in the sun.

*   **Insect Repellent:** Depending on the destination, this can be a lifesaver.

*   **Small First-Aid Kit:** Band-aids, antiseptic wipes, pain relievers, and any personal medications.

*   **Lip Balm with SPF:** Don't forget to protect your lips!

### Extras & Miscellaneous

These items can make your trip even better.

*   **Beach Towel:** A quick-dry microfiber towel is a great option.

*   **Reusable Water Bottle:** Stay hydrated and be environmentally friendly.

*   **A Good Book or Kindle:** For relaxing during downtime.

*   **Camera or Smartphone:** To capture the memories. A waterproof case is a great idea.

*   **Portable Charger/Power Bank:** Keep your devices charged.

*   **Dry Bag:** To keep your valuables safe and dry at the beach.

*   **A Small Backpack:** For day trips and carrying your essentials.

*   **Local Currency:** It's always a good idea to have some cash on hand.

## A Final Tip

Pack light! You'll likely be in a swimsuit and flip-flops most of the time. Focus on the essentials and leave room for souvenirs. Most importantly, bring a positive attitude and an open mind. Your first surf camp is an adventure waiting to happen!`
    },
    {
        id: '6',
        title: 'Best Surf and Yoga Camps for Digital Nomads',
        excerpt: 'Looking for the perfect surf and yoga camp for digital nomads? Discover top camps that combine waves, wellness, and remote work facilities for a productive and balanced lifestyle.',
        imageUrl: 'https://i.postimg.cc/ydhDN4Xr/img.webp',
        author: 'Khalid',
        date: 'November 05, 2023',
        content: `## Surfing, Yoga, and Remote Work

Digital nomads are constantly searching for destinations that combine work, adventure, and wellness. Surf and yoga camps offer a unique opportunity to balance productivity with health and leisure. Imagine starting your morning with yoga, catching waves before lunch, and finishing your workday with an ocean view.

In this guide, we explore the best surf and yoga camps for digital nomads, helping you find a location where work and passion coexist seamlessly.

### 1. Why Digital Nomads Choose Surf and Yoga Camps

Surf and yoga camps offer several advantages for digital nomads:

• Work-Life Balance: Structured surf and yoga sessions help maintain a healthy routine.

• Inspiration: Being close to nature fosters creativity and focus.

• Community: Meet like-minded remote workers and build friendships.

• Health Benefits: Regular surfing and yoga improve physical and mental well-being.

This combination of work and lifestyle creates a fulfilling experience that goes beyond ordinary travel.

### 2. Bali, Indonesia – Canggu and Uluwatu

Bali has long been a favorite for digital nomads, and surf and yoga camps make it even more appealing.

• Camps: Many offer high-speed Wi-Fi, co-working spaces, and accommodation near the beach.

• Surf Conditions: Gentle waves for beginners and intermediate surfers.

• Yoga & Wellness: Daily classes with experienced instructors and meditation sessions.

• Lifestyle: Cafes, coworking hubs, and a vibrant expat community.

Canggu and Uluwatu are perfect spots to combine remote work with surfing and yoga adventures.

### 3. Taghazout, Sidi Ifni, Morocco

Taghazout and Sidi Ifni is an emerging hub for digital nomads seeking a slower pace and authentic surf culture.

• Camps: Surf and yoga packages include meals, boards, and flexible schedules for work.

• Surf Conditions: Long, easy beach breaks ideal for beginners and intermediate surfers.

• Community: Cozy, welcoming environment with international travelers.

• Extras: Excursions, cultural experiences, and wellness programs.

Morocco offers a unique mix of ocean, culture, and productive nomad lifestyle.

### 4. Costa Rica – Nosara and Santa Teresa

Costa Rica’s surf towns are paradise for nomads who love nature and adventure.

• Camps: Surf and yoga retreats often include coworking areas and high-speed internet.

• Surf Conditions: Soft waves perfect for learners, consistent surf year-round.

• Wellness: Yoga, meditation, and healthy local food.

• Lifestyle: Jungle, ocean, and small-town charm create a focused yet relaxed environment.

Costa Rica allows you to grow professionally while enjoying an active, balanced life.

### 5. Portugal – Ericeira and Algarve

Portugal is ideal for nomads looking for European convenience with excellent surf.

• Camps: Offer structured surf and yoga sessions along with coworking facilities.

• Surf Conditions: Mellow waves for beginners, challenging spots for advanced surfers.

• Community: International nomad presence, easy travel, and cultural experiences.

• Lifestyle: Great food, stunning coastlines, and a relaxed European vibe.

Ericeira and Algarve combine ocean adventures with an efficient nomad lifestyle.

### 6. Sri Lanka – Weligama and Arugam Bay

Sri Lanka’s warm waters and scenic beaches make it a popular choice for digital nomads.

• Camps: Provide work-friendly accommodations with surfboards and yoga mats included.

• Surf Conditions: Beginner-friendly beach breaks and calm waters.

• Wellness: Yoga classes, meditation sessions, and beachside relaxation.

• Lifestyle: Tropical paradise with a slower pace, ideal for focus and creativity.

The combination of surfing, yoga, and natural beauty makes Sri Lanka highly attractive for remote workers.

## How to Choose the Right Camp for Remote Work

When selecting a surf and yoga camp as a digital nomad, consider:

• Internet Quality: Reliable Wi-Fi is essential for work.

• Workspace Options: Some camps provide dedicated coworking areas.

• Flexibility: Check schedules to balance work, surfing, and yoga.

• Accommodation: Comfortable living conditions for productivity and rest.

• Community: A supportive group of fellow nomads can enhance your experience.

Choosing the right camp ensures a seamless blend of work and leisure.

## Tips for Balancing Work and Surf/Yoga

Maintaining productivity while enjoying surf and yoga sessions requires planning:

• Set a Routine: Allocate specific times for work, surfing, and yoga.

• Prioritize Tasks: Focus on high-priority work when energy is highest.

• Use Time Zones wisely: Coordinate work around clients or meetings in different regions.

• Stay Flexible: Adapt your schedule to the waves and weather conditions.

• Take Breaks: Short surf or yoga sessions boost creativity and reduce stress.

A balanced approach helps you maximize both work output and personal well-being.

## Benefits of Surf and Yoga Camps for Nomads

• Health & Fitness: Regular activity improves stamina, strength, and flexibility.

• Mental Clarity: Yoga and time in nature reduce stress and increase focus.

• Community: Networking with like-minded nomads can lead to collaborations and friendships.

• Cultural Exposure: Experience new cultures, foods, and lifestyles while maintaining work routines.

These benefits make surf and yoga camps more than just a vacation — they are a lifestyle choice for remote workers.

## Conclusion
For digital nomads, a surf and yoga camp offers the perfect environment to combine work, health, and adventure. By choosing the right location, planning your schedule, and engaging with the community, you can enjoy productive days while improving your surfing and wellness.

If you’re looking for a summer (or year-round) experience that balances remote work with personal growth, surf and yoga camps are the ideal solution.`
    },
    {
        id: '7',
        title: '5 Hidden Surf Camp Destinations You Should Visit Before Everyone Else',
        excerpt: 'Discover 5 hidden surf camp destinations perfect for adventurous surfers. Learn where to go for uncrowded waves, breathtaking scenery, and unique surf experiences before the crowds arrive.',
        imageUrl: 'https://i.postimg.cc/xCqNdb7R/img.webp',
        author: 'Fatima',
        date: 'November 08, 2023',
        content: `## The Thrill of Hidden Surf Spots

Surfing is more than just riding waves; it’s about exploration, adventure, and discovering new horizons. While popular surf destinations like Bali, Costa Rica, and Portugal attract thousands of travelers each year, some lesser-known spots offer pristine beaches, uncrowded waves, and a truly authentic experience.

This guide will introduce five hidden surf camp destinations that surfers should explore before they become mainstream. These locations combine amazing surf conditions with scenic beauty, cultural richness, and a sense of discovery.

### 1. Sumbawa, Indonesia

• Surf Conditions: Consistent reef breaks suitable for intermediate and advanced surfers.

• Crowds: Extremely low, allowing more waves per session.

• Surf Camps: Small, locally-owned camps provide personalized coaching and authentic experiences.

• Extras: Stunning landscapes, volcanic mountains, and tropical forests.

Sumbawa is ideal for surfers seeking both challenge and solitude.

### 2. Nicaraguan Pacific Coast

• Surf Conditions: Long, mellow beach breaks perfect for beginners and intermediates.

• Crowds: Low to moderate, with many empty waves early in the day.

• Surf Camps: Eco-friendly camps that combine surfing, yoga, and cultural immersion.

• Extras: Beautiful beaches, colonial towns, and a rich local culture.

This destination is perfect for surfers who want a quiet, authentic experience without compromising on wave quality.

### 3. Las Penitas, Nicaragua

• Surf Conditions: Gentle waves for beginners, perfect for learning or relaxing sessions.

• Crowds: Very few tourists, offering a serene surf environment.

• Surf Camps: Affordable camps with family-style accommodations and personalized lessons.

• Extras: Local food, sunsets over the ocean, and a welcoming community.

Las Penitas is ideal for first-time surf campers looking to avoid crowded beaches.

### 4. Vieux Boucau, France

• Surf Conditions: Beach breaks suitable for beginners and intermediates.

• Crowds: Low compared to the more famous spots, providing a more relaxed atmosphere.

• Surf Camps: Boutique surf camps offering yoga, surf coaching, and cultural experiences.

• Extras: European charm, local markets, and scenic coastal walks.

Vieux Boucau is perfect for travelers who want to combine European culture with uncrowded surf.

### 5. Nias Island, Indonesia

• Surf Conditions: Powerful reef breaks for intermediate and advanced surfers.

• Crowds: Sparse, offering almost private surfing experiences.

• Surf Camps: Small, locally-run camps with expert instructors and authentic cultural exposure.

• Extras: Traditional villages, untouched landscapes, and natural beauty.

Nias is ideal for surfers seeking adventure, challenge, and exploration beyond mainstream destinations.

## Why Explore Hidden Surf Camp Destinations

Choosing a hidden surf camp destination has several benefits:

• Less Crowded Waves: More time on the water without competition.

• Authentic Experiences: Engage with local culture and traditions.

• Adventure and Discovery: Surfing in unique locations adds excitement to your journey.

• Personal Growth: Learning in new environments challenges and improves your skills.

Hidden destinations provide a more meaningful and memorable surf experience than heavily touristed spots.

## Tips for Visiting Hidden Surf Camps

• Plan Ahead: These locations may have limited accommodation and facilities.

• Research Transport: Remote areas often require additional travel planning.

• Bring Essentials: Some camps are rustic, so pack smart with all necessary gear.

• Be Flexible: Weather, tides, and local conditions may require adjusting plans.

• Respect Local Culture: Engage positively and responsibly with local communities.

Proper preparation ensures a smooth and rewarding experience at hidden surf destinations.

## Conclusion
Exploring hidden surf camp destinations offers a unique opportunity to combine adventure, skill development, and cultural discovery. Whether it’s lounging on the remote waves of Sumbawa or the serene beaches of Las Penitas, these locations provide uncrowded, authentic, and unforgettable surfing experiences.

For surfers who want to stay ahead of the crowd and truly immerse themselves in their passion, these hidden gems are the perfect choice. Discover them before everyone else, and make your surf camp journey truly exceptional.`
    },
    {
        id: '8',
        title: 'How to Choose the Right Surf Camp for Your Skill Level',
        excerpt: 'Not all surf camps are the same. Learn how to choose the right surf camp based on your experience level, goals, and comfort, ensuring a safe and enjoyable surfing adventure.',
        imageUrl: 'https://i.postimg.cc/6Q32zmKy/img.webp',
        author: 'Khalid',
        date: 'November 11, 2023',
        content: `## Why Choosing the Right Surf Camp Matters

Surf camps cater to a wide range of surfers, from absolute beginners to advanced wave riders. Picking the wrong camp can lead to frustration, slow progress, or even unsafe situations. Choosing the right camp ensures that you receive proper instruction, access suitable waves, and have an enjoyable experience.

This guide will help you identify what to look for when selecting a surf camp based on your skill level, making your surfing journey both fun and productive.

### 1. Identify Your Surfing Skill Level

Before booking a camp, it’s important to honestly assess your abilities. Surfing skill levels are generally categorized as:

• Beginner: Never surfed before or limited experience. Focus is on learning basic paddling, wave catching, and balance.

• Intermediate: Comfortable standing on the board and riding small waves. Ready to learn turns, maneuvers, and timing.

• Advanced: Experienced in various wave types, able to perform tricks and ride larger, more challenging waves.

Knowing your skill level helps you choose a camp that matches your needs and ensures steady progress.

### 2. Look for Camps That Match Your Level

Surf camps often specialize in certain skill levels. Here’s what to look for:

• Beginner Camps: Provide small, gentle waves, soft-top boards, and patient instructors. Emphasis is on fun and safety.

• Intermediate Camps: Offer more challenging waves, video analysis, and advanced techniques. Coaches help refine skills.

• Advanced Camps: Focus on high-performance surfing, large waves, and competitive techniques. Often include local surf trips.

Selecting a camp designed for your level prevents frustration and accelerates learning.

### 3. Consider Class Size and Instructor Ratio

The number of participants per instructor significantly affects learning:

• Small Groups (4–8 participants): More personalized attention, faster skill improvement.

• Medium Groups (10–15 participants): Balanced instruction with social interaction.

• Large Groups (15+ participants): Less individual guidance, more independent practice required.

For beginners and intermediates, small to medium-sized groups are ideal to ensure safety and effective learning.

### 4. Check the Type of Waves and Surf Conditions

Wave conditions are crucial for skill development:

• Beach Breaks: Gentle, sandy-bottom waves ideal for beginners.

• Point Breaks: Consistent waves suited for intermediate surfers.

• Reef Breaks: Powerful waves for advanced surfers seeking challenges.

Choose a camp where the waves match your abilities to practice safely and improve efficiently.

### 5. Evaluate Additional Amenities

Surf camps often offer extra features that enhance the experience:

• Yoga Classes: Help with flexibility, balance, and mental focus.

• Fitness Training: Strengthens muscles used in surfing.

• Video Analysis: Enables faster learning through feedback.

• Accommodation: Comfortable lodging improves overall enjoyment and recovery.

Consider which amenities are important for your skill level and personal goals.

### 6. Read Reviews and Testimonials

Hearing from past participants provides valuable insights:

• Look for feedback about teaching quality and safety measures.

• Pay attention to reviews mentioning progress at your skill level.

• Check for comments about instructor professionalism and friendliness.

• Ensure the camp delivers what it promises in terms of waves and facilities.

Reviews can help avoid camps that don’t meet expectations, especially for your skill category.

### 7. Check Safety Measures and Insurance

Surfing carries inherent risks. Camps should prioritize safety:

• Experienced instructors with certifications in surf coaching and first aid.

• Availability of safety equipment like life vests and soft-top boards.

• Knowledge of local tides, currents, and hazards.

• Travel or surf accident insurance recommendations.

Safety is non-negotiable, especially for beginners and intermediates who are still developing confidence.

### 8. Consider the Camp’s Teaching Methodology

Different camps use various teaching approaches:

• Structured Curriculum: Lessons progress step by step, ideal for beginners.

• Flexible Coaching: Tailored to each participant’s pace, suitable for intermediate surfers.

• Intensive Sessions: Focused on performance and skills for advanced surfers.

Choose a teaching style that aligns with your learning preferences and skill level.

### 9. Factor in Location and Accessibility

Location affects wave quality, travel convenience, and overall experience:

• Remote locations may offer pristine waves but require longer travel.

• Well-known surf spots may be crowded but have more amenities.

• Consider climate, season, and cultural experiences in your decision.

A camp that balances wave conditions with comfort and accessibility will enhance your overall surfing journey.

### 10. Plan for Future Progression

If you intend to grow as a surfer, consider camps that offer progression paths:

• Beginner to intermediate programs within the same camp or network.

• Opportunities for advanced coaching as your skills improve.

• Community support and networking for long-term surfing goals.

Choosing a camp that supports growth ensures your investment leads to continuous improvement.

## Conclusion

Selecting the right surf camp for your skill level is essential for a safe, enjoyable, and effective learning experience. By assessing your abilities, checking wave conditions, reviewing amenities, and evaluating safety and teaching methods, you can choose a camp that accelerates your surfing journey and maximizes enjoyment.

Whether you are a beginner, intermediate, or advanced surfer, the perfect surf camp awaits — one that matches your skills, goals, and adventure spirit.`
    },
    {
        id: '9',
        title: 'Surf Camp Etiquette: Do’s and Don’ts for Beginners',
        excerpt: 'Heading to your first surf camp? Learn the essential surf etiquette every beginner should know—from lineup rules to respectful behavior—to make friends and improve faster in the water.',
        imageUrl: 'https://i.postimg.cc/vBmKY9nx/img.webp',
        author: 'Youssef',
        date: 'November 14, 2023',
        content: `## The Importance of Surf Etiquette

Joining a surf camp is an exciting step in your surfing journey. You’ll meet other beginners, learn from experienced instructors, and catch waves in beautiful locations. But there’s one crucial aspect that often gets overlooked — surf etiquette.

Just like any sport, surfing has its own unwritten rules that help everyone stay safe, respectful, and have fun. Understanding these rules will not only help you fit in but also earn the respect of your fellow surfers.

This guide breaks down the do’s and don’ts of surf camp etiquette so you can feel confident both in and out of the water.

## What Is Surf Etiquette and Why Does It Matter?

Surf etiquette is a set of guidelines that all surfers follow to ensure fairness, safety, and harmony in the lineup. When multiple surfers share the same waves, things can get chaotic quickly — especially if someone ignores the basic rules.

Following etiquette at your surf camp shows you respect the ocean and the people you share it with. It helps you build better connections and makes your learning experience smoother and more enjoyable.

## The Do’s of Surf Camp Etiquette

### 1. Listen to Your Instructor

Your surf coach is your best source of knowledge. Whether it’s about positioning, timing, or reading waves listen carefully and follow their lead. Respecting your instructor creates a positive learning environment for everyone.

### 2. Respect the Lineup

The lineup is where surfers wait for their turn to catch a wave. Always take your turn and avoid paddling around others to steal a wave. Patience is key — everyone gets their moment.

### 3. Communicate in the Water

If you’re going for a wave, shout “Left!” or “Right!” to let others know your direction. Communication prevents accidents and helps everyone stay aware of each other’s moves.

### 4. Help Fellow Surfers

If you see someone struggling or losing their board, offer help. Surfing culture thrives on community and kindness — helping others will make you a valued part of the group.

### 5. Be Aware of Your Surroundings

Keep your distance from others in the water and watch where your board goes after you fall. Being aware helps prevent injuries and collisions.

## The Don’ts of Surf Camp Etiquette

### 1. Don’t Drop In on Someone’s Wave

“Dropping in” means catching a wave that someone else is already riding. This is one of the biggest no-nos in surfing. Always check both sides before going for a wave.

### 2. Don’t Hog the Waves

Even if you’re feeling confident, let others take turns. Sharing is part of the surfing spirit — everyone deserves to enjoy the waves.

### 3. Don’t Panic When You Wipe Out

Falling off your board is normal. When it happens, cover your head with your arms, look around, and safely grab your board. Avoid panicking, and never ditch your board toward others.

### 4. Don’t Ignore Local Customs

If your surf camp is in a foreign country, take time to learn local surf culture. Each beach has its own rhythm and vibe. Respect locals and the environment — it goes a long way.

### 5. Don’t Leave Trash Behind

Surfing and nature go hand in hand. Always clean up after yourself — from snack wrappers to empty bottles. A true surfer leaves no trace behind.

## Bonus: Beach Etiquette Outside the Water

Good manners don’t stop once you’re on the sand. Here’s how to stay respectful onshore:

• Don’t step on other people’s boards or gear.

• Keep noise levels down early in the morning or late at night.

• Ask before taking photos of others.

• Be mindful of shared spaces like showers and lockers.

## Why Good Etiquette Makes You a Better Surfer

Following surf etiquette isn’t just about rules — it’s about building confidence, awareness, and empathy. When you respect the ocean and your peers, you naturally become more in tune with your surroundings.

Your progress at surf camp will be faster because you’ll spend more time learning, less time in awkward situations, and more energy enjoying the waves.

A surf camp is more than just a place to learn — it’s a small community built on respect, patience, and shared passion. When you follow surf etiquette, you help create an environment where everyone thrives.

So, as you pack your board and wax your surfboard, remember: being a great surfer isn’t only about catching the biggest wave — it’s about how you treat others while you’re in the water.`
    },
    {
        id: '10',
        title: 'Why Combining Surfing and Yoga Is the Perfect Mind-Body Experience',
        excerpt: 'Discover why surf and yoga camps are the ultimate way to balance body and mind. Learn how yoga enhances your surfing performance, focus, and recovery for a more fulfilling ocean experience.',
        imageUrl: 'https://i.postimg.cc/Gtmb1H30/img.webp',
        author: 'Admin',
        date: 'November 17, 2023',
        content: `## The Ideal Mind-Body Experience

Surfing and yoga may seem like two different worlds, one is about riding waves and chasing adrenaline, while the other is about stillness and inner peace. But when you look deeper, they’re actually a perfect match.

Both practices require balance, focus, breath control, and body awareness. That’s why many surf camps now include yoga sessions as part of their daily routine. Combining the two creates harmony between physical strength and mental calm — helping you become not only a better surfer, but also a more centered person.

In this article, we’ll explore why surfing and yoga make such a powerful combination, and how embracing both can completely transform your ocean experience.

## The Connection Between Surfing and Yoga

At their core, both surfing and yoga teach presence, the art of being in the moment.

When you’re catching a wave, your mind can’t wander; you’re focused entirely on balance, movement, and timing. Similarly, yoga brings awareness to your breath and body, helping you stay calm under pressure.

This shared connection to mindfulness is what makes them so complementary. Surfing challenges your body, while yoga trains your mind to stay steady and composed, even when the ocean gets wild.

## Physical Benefits of Combining Surfing and Yoga

### 1. Improved Balance and Core Strength

Surfing demands strong core muscles for stability. Yoga strengthens those same muscles through poses like plank, warrior, and boat pose, helping you stay upright longer on your board.

### 2. Better Flexibility and Mobility

Tight muscles can limit your surfing ability. Yoga stretches your shoulders, hips, and legs, key areas that surfers often strain. With more flexibility, you can pop up faster and maneuver more smoothly on waves.

### 3. Enhanced Recovery and Injury Prevention

Surfing uses repetitive motions, especially paddling and twisting. A few yoga sessions after surfing can release tension, reduce soreness, and help prevent common injuries in the shoulders and lower back.

### 4. Improved Breathing and Endurance

Both surfing and yoga rely heavily on breath control. In yoga, you learn deep, steady breathing that enhances your oxygen intake, crucial for maintaining stamina when paddling or holding your breath underwater.

## Mental Benefits of Surf and Yoga Practice

### 1. Mindfulness and Presence

The ocean teaches humility, no two waves are ever the same. Yoga trains you to accept this uncertainty with calmness and grace. Together, they help you stay mindful and embrace each moment as it comes.

### 2. Reduced Stress and Anxiety

The ocean’s rhythm and yoga’s breathing techniques both activate your parasympathetic nervous system, the part that calms you down. This combination relieves stress, improves sleep, and clears mental fog.

### 3. Increased Confidence

As you strengthen your body and calm your mind, your confidence grows. You start to trust yourself more, both in your surf sessions and in everyday life.

## The Perfect Surf and Yoga Camp Routine

A typical surf and yoga camp day might look like this:

• **Morning Yoga (Sunrise Flow):** Start your day with gentle stretching and breathwork to awaken your body and prepare your muscles for surfing.

• **Surf Session (Late Morning):** Hit the waves while your body is warm and your mind is focused.

• **Lunch & Relaxation:** Refuel with a healthy meal and enjoy downtime by the beach.

• **Evening Yoga (Restorative Flow):** End your day with deep stretches and meditation to release tension and improve recovery.

This balanced routine allows you to build strength in the water and find calmness on the mat a true mind-body synergy.

## Why This Combo Works So Well for Digital Nomads and Travelers

Surf and yoga camps are especially popular among digital nomads and travelers seeking a healthy, mindful lifestyle. The mix of physical activity, mental clarity, and community connection makes these camps a refreshing escape from busy work life.

You’ll meet like-minded people, explore stunning beaches, and find balance between adventure and self-care, something many modern travelers crave.

## Tips for Getting the Most Out of Your Surf and Yoga Experience

• **Stay Consistent:** Practice yoga every day, even for 10–15 minutes, to build strength and flexibility.

• **Listen to Your Body:** Rest when needed, overtraining can lead to fatigue.

• **Focus on Breath:** Whether surfing or stretching, your breath connects movement and awareness.

• **Be Patient:** Progress in both yoga and surfing takes time. Celebrate small wins.

• **Enjoy the Journey:** Don’t aim for perfection, aim for connection, flow, and fun.

## Conclusion

Surfing and yoga together create a beautiful balance between motion and stillness, power and peace. Yoga helps you breathe through challenges, stay flexible, and recover faster, while surfing reminds you how to surrender and flow with life.

If you’ve everfelt the ocean’s pull or the calm of a yoga mat, imagine combining both. It’s not just fitness, it’s transformation.

So this summer, pack your board, grab your mat, and experience how surfing and yoga can bring harmony to your body, mind, and spirit.`
    },
    {
        id: '11',
        title: 'Sunset Sessions: Why Surfing at Dusk is Magical',
        excerpt: 'There\'s a special kind of magic in the water as the sun goes down. We explore why a sunset surf session is an experience every surfer should have.',
        imageUrl: 'https://images.unsplash.com/photo-1519505285317-0c7f1a30a135?q=80&w=800&auto=format&fit=crop',
        author: 'Fatima',
        date: 'November 20, 2023',
        content: `As the day winds down, the ocean often transforms. The wind may die down, creating glassy, smooth conditions. The crowds tend to thin out, leaving more waves for those who remain. But the real magic of a sunset session is the atmosphere.

**A Spectacle of Color:** The sky ignites with hues of orange, pink, and purple, reflecting off the surface of the water. Every wave becomes a moving canvas, and the simple act of sitting on your board and waiting becomes a breathtaking experience.

**A Peaceful Transition:** A sunset surf is the perfect way to transition from the business of the day to the calm of the evening. It’s a chance to wash away any stress and connect with the natural rhythm of the ocean.

**A Shared Experience:** Sharing waves with friends as the sun dips below the horizon creates a unique sense of camaraderie and shared awe. These are the moments that stick with you long after you've left the water.

**Safety First:** Remember to be mindful of the fading light. Know your limits, and don't stay out too long after the sun has set unless you are experienced and familiar with the spot.

Here at SunSet Ifni, our name says it all. The sunsets are a core part of our camp experience, and we highly recommend paddling out to enjoy the show.`
    },
    {
        id: '12',
        title: 'Meet the Locals: The Warm Hospitality of Sidi Ifni',
        excerpt: 'The true heart of Sidi Ifni lies in its people. Learn about the culture of hospitality that makes a trip here so much more than just a surf vacation.',
        imageUrl: 'https://images.unsplash.com/photo-1605640132159-4a22b7a2d48c?q=80&w=800&auto=format&fit=crop',
        author: ' Khalid',
        date: 'November 23, 2023',
        content: `While you might come to Sidi Ifni for the waves, you'll leave with memories of the people. Moroccan culture, and especially the Amazigh (Berber) culture of this region, places a high value on hospitality.

**A Welcoming Spirit:** Don't be surprised if you're invited for a glass of mint tea by a shopkeeper or greeted with a warm smile by strangers on the street. This welcoming nature is an integral part of life here.

**The Art of Conversation:** People are genuinely curious and friendly. Take the time to have a conversation. Learning a few words of Arabic or the local Tashelhit dialect (like "Salam" for hello and "Shukran" for thank you) will be greatly appreciated.

**Respectful Interaction:** As a visitor, it's important to be respectful of local customs. Dress modestly when you're in town, especially when visiting markets or more traditional areas. Always ask for permission before taking a photo of someone.

**A Rich History:** Sidi Ifni has a unique history with Spanish Art Deco architectural influences, which you can see throughout the town. Exploring the streets is like taking a step back in time.

At our camp, we strive to be a bridge between our guests and the local community. We encourage you to explore, interact, and immerse yourself in the warm and vibrant culture of Sidi Ifni.`
    }
];

const accommodationServices: AccommodationService[] = [
    {
        id: '1',
        name: 'Ocean View Riad',
        logoUrl: 'https://i.postimg.cc/mD0Vz3Y3/logo1.png',
        description: 'A beautiful Riad located right on the coast, offering stunning ocean views from every room. Perfect for those who want to wake up to the sound of waves.\n\nIncludes a rooftop terrace for yoga and relaxation, daily Moroccan breakfast, and is just a short walk from the town center.',
        tags: ['Ocean View', 'Rooftop Terrace', 'Luxury', 'Free Wifi', 'Breakfast Included'],
        affiliateUrl: 'https://www.booking.com/'
    },
    {
        id: '2',
        name: 'The Surfer\'s Hub',
        logoUrl: 'https://i.postimg.cc/mD0Vz3Y3/logo1.png',
        description: 'A budget-friendly hostel designed for surfers. Features a shared living space, board storage, and is located just a 5-minute walk from the main surf break.\n\nA great place to meet other travelers, with communal dinners and organized social events.',
        tags: ['Hostel', 'Budget-Friendly', 'Social', 'Board Storage', 'Close to Beach'],
        affiliateUrl: 'https://www.hostelworld.com/'
    },
    {
        id: '3',
        name: 'Berber Coast Apartments',
        logoUrl: 'https://i.postimg.cc/mD0Vz3Y3/logo1.png',
        description: 'Modern, self-catering apartments with fully equipped kitchens. Ideal for families or groups who want more independence during their stay.\n\nEach apartment has a private balcony, and there is a shared pool available for all guests.',
        tags: ['Apartment', 'Self-Catering', 'Family Friendly', 'Private Balcony', 'Pool'],
        affiliateUrl: 'https://www.airbnb.com/'
    },
];

interface RoomType {
  name: string;
  hashtag: string;
  imageUrl: string;
}

const roomTypes: RoomType[] = [
  {
    name: 'CARI SURF CAMP',
    hashtag: '#DIDYOUSURFTODAY',
    imageUrl: 'https://images.unsplash.com/photo-1560185893-a5536c80e64d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'SURF STUDIO',
    hashtag: '#DIDYOUSURFTODAY',
    imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'SURF VILLAS',
    hashtag: '#DIDYOUSURFTODAY',
    imageUrl: 'https://images.unsplash.com/photo-1590490359853-395107ba0d40?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'SURF DORMITORY',
    hashtag: '#DIDYOUSURFTODAY',
    imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop',
  },
];

// --- NEW SHOP DATA ---
const shopProducts: ShopProduct[] = [
    {
        id: '1',
        name: 'Dingle Surf Wave T-Shirt',
        price: '€25.00',
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
        description: 'Ride the wave of style with our classic organic cotton t-shirt. Featuring a retro wave graphic, it\'s the perfect tee for beach days and beyond. Soft, breathable, and built to last.'
    },
    {
        id: '2',
        name: 'Dingle Surf Classic Long Sleeve',
        price: '€35.00',
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
        description: 'Stay warm on cooler evenings with our premium long sleeve. Made from a soft cotton blend, it features the iconic Dingle Surf logo on the chest and a minimalist design on the back.'
    },
    {
        id: '3',
        name: 'Dingle Surf Co. Kerry T-Shirt',
        price: '€25.00',
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
        description: 'Represent the rugged coast of County Kerry. This t-shirt is a tribute to our home, featuring a unique typographic design that captures the spirit of the Irish coast. Made from 100% organic cotton.'
    },
    {
        id: '4',
        name: 'Dingle Surf Wave Long Sleeve T-Shirt - Atlantic Storm',
        price: '€35.00',
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
        description: 'Embrace the elements with the Atlantic Storm edition long sleeve. A darker take on our classic wave design, this shirt is perfect for those who feel the power of the ocean. Heavyweight cotton for extra warmth.'
    }
];

// --- UI COMPONENTS ---

const Section: React.FC<{ children: React.ReactNode, className?: string, id?: string, padding?: string }> = ({ children, className, id, padding = 'py-16 md:py-24' }) => (
    <section id={id} className={className}>
        <div className={`container mx-auto px-6 ${padding}`}>
            {children}
        </div>
    </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode, subtitle?: string, fontStyle?: 'default' | 'special' }> = ({ children, subtitle, fontStyle = 'default' }) => (
    <div className="text-center mb-12 md:mb-16">
        <h2 className={
            fontStyle === 'special'
            ? "text-3xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue mb-4 animate-fade-in-down"
            : "text-3xl md:text-4xl font-bold font-heading text-title-blue dark:text-ocean-blue mb-4 animate-fade-in-down"
        }>
            {children}
        </h2>
        <img 
            src="https://i.postimg.cc/NGKcdBNt/1.png" 
            alt="Decorative line" 
            className="mx-auto my-6 h-auto w-80 md:w-[500px] animate-fade-in-up" 
        />
        {subtitle && <p className={
            fontStyle === 'special'
            ? "text-lg font-mono text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
            : "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
        }>{subtitle}</p>}
    </div>
);

// --- HOME PAGE COMPONENTS ---

const heroSlides = [
  {
    imageUrl: 'https://i.postimg.cc/tJYwCtVV/pexels-hassane-elhariti-308723409-20799000.jpg',
    title: 'Ride the Moroccan Waves',
    subtitle: 'Experience the magic of Sidi Ifni. Perfect waves, expert guides, and unforgettable adventures await.',
  },
  {
    imageUrl: 'https://i.postimg.cc/BnJJCRW8/486086001-1132175455371798-1420394309481266847-n.jpg',
    title: 'Your Perfect Surf Getaway',
    subtitle: 'From beginner lessons to pro packages, we have the perfect trip for you.',
  },
  {
    imageUrl: 'https://i.postimg.cc/s2Ck9NM3/486376480-1132491895340154-4128647623392820094-n.jpg',
    title: 'More Than Just Surfing',
    subtitle: 'Immerse yourself in local culture, relax with yoga, and make lifelong friends.',
  },
  {
    imageUrl: 'https://i.postimg.cc/0NJNr3hX/486160456-1132492202006790-1800916472850253035-n.jpg',
    title: 'Discover the Hidden Gems',
    subtitle: 'Explore the uncrowded breaks and stunning coastline of Southern Morocco.',
  },
  {
    imageUrl: 'https://i.postimg.cc/y8Dv28Cb/520597776-1221684539754222-7769563126210190870-n.jpg',
    title: 'Create Lifelong Memories',
    subtitle: 'Join our community of passionate surfers and adventurers.',
  },
  {
    imageUrl: 'https://i.postimg.cc/0QFdDLNd/pexels-igonkin-9945400.jpg',
    title: 'Sun, Sea, and Soul',
    subtitle: 'Connect with nature and yourself at our authentic surf camp.',
  }
];

const HeroSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % heroSlides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(slideInterval);
    }, []);

    const handleButtonClick = (link: string) => {
        if (link.startsWith('#')) {
            const element = document.querySelector(link);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            setPage(link);
        }
    };

    return (
        <section className="relative h-[85vh] min-h-[600px] text-white overflow-hidden">
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out animate-subtle-pan"
                    style={{ 
                        backgroundImage: `url('${slide.imageUrl}')`,
                        opacity: index === currentSlide ? 1 : 0,
                    }}
                >
                    <div className="absolute inset-0 bg-title-blue/70"></div>
                </div>
            ))}
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
                <div className="flex-grow flex flex-col items-center justify-center">
                    <div key={currentSlide} className="w-full">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-magilio text-white mb-4 animate-fade-in-down">
                            {heroSlides[currentSlide].title}
                        </h1>
                        <p className="text-lg md:text-xl font-consolas text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-up-base" style={{ animationDelay: '0.3s' }}>
                            {heroSlides[currentSlide].subtitle}
                        </p>
                    </div>
                    <div className="animate-fade-in-up-base" style={{ animationDelay: '0.6s' }}>
                         <button
                            onClick={() => handleButtonClick('#intro')}
                            className="bg-ifni-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-ifni-gold/50 inline-block"
                        >
                            Discover Your Adventure
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};


const IntroSection: React.FC = () => (
  <Section id="intro" className="bg-light-gray-blue dark:bg-dark-slate/20">
    {/* Welcome Text Part */}
    <div className="text-center max-w-4xl mx-auto">
      <img src="https://i.postimg.cc/GtswGY0P/65.png" alt="Sunset Ifni Surf Camp Wave Logo" className="mx-auto mb-6 h-20 animate-fade-in-down" />
      <h2 className="text-2xl md:text-4xl font-magilio text-title-blue dark:text-ocean-blue mb-6 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
        <span className="whitespace-nowrap">W e l c o m e</span> <span className="whitespace-nowrap">&nbsp; t o</span> <span className="whitespace-nowrap">&nbsp; I f n i</span> <span className="whitespace-nowrap">&nbsp; T o u r</span> <span className="whitespace-nowrap">&nbsp; <br/>S u r f</span> <span className="whitespace-nowrap">&nbsp; C a m p</span>
      </h2>
      <img 
        src="https://i.postimg.cc/NGKcdBNt/1.png" 
        alt="Decorative line" 
        className="mx-auto my-6 h-auto w-80 md:w-[500px] animate-fade-in-up" 
        style={{ animationDelay: '0.2s' }} 
      />
      <p className="text-lg font-mono font-bold text-black dark:text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        At Ifni Tour Camp, we believe surfing is more than just a sport it’s a lifestyle. Our camp offers an authentic Moroccan surf experience where sunset, sea, and soul connect.
      </p>
    </div>
  </Section>
);

const sidiIfniSlides = [
    { src: 'https://i.postimg.cc/d3NB3bcS/486311019-1132163745372969-5081691663955616552-n.jpg', alt: 'Scenic view of Sidi Ifni coastline with white and blue buildings' },
    { src: 'https://i.postimg.cc/BnJJCRW8/486086001-1132175455371798-1420394309481266847-n.jpg', alt: 'Street in Sidi Ifni with local architecture' },
    { src: 'https://i.postimg.cc/0NJNr3hX/486160456-1132492202006790-1800916472850253035-n.jpg', alt: 'Sidi Ifni beach from above' },
    { src: 'https://i.postimg.cc/DzhR1BgB/485387502-1132492028673474-2670418100409429825-n.jpg', alt: 'Sidi Ifni beach from above' },
    { src: 'https://i.postimg.cc/05JRRMbL/486199569-1132163808706296-384939461149796442-n.jpg', alt: 'Sidi Ifni beach from above' },
    { src: 'https://i.postimg.cc/VNTGDg9x/486376480-1132491895340154-4128647623392820094-n.jpg', alt: 'Sidi Ifni beach from above' },
    { src: 'https://i.postimg.cc/286WSYN0/486160456-1132492202006790-1800916472850253035-n.jpg', alt: 'Sidi Ifni beach from above' },
    { src: 'https://i.postimg.cc/YScLRmGT/Peter-Ifni-All-Alone-1170x500.jpg', alt: 'Sidi Ifni beach from above' },
    { src: 'https://i.postimg.cc/tJYwCtVV/pexels-hassane-elhariti-308723409-20799000.jpg', alt: 'Surfer walking on the beach at Sidi Ifni' },
];

const SidiIfniSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % sidiIfniSlides.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <Section className="bg-deep-sea-blue dark:bg-deep-sea-blue/90">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left Column: Text */}
                <div className="md:w-1/2 text-center order-2 md:order-1" data-aos="fade-left">
                    <h3 className="text-4xl md:text-6xl font-magilio text-golden-yellow dark:text-golden-yellow mb-6">
                        S I D I &nbsp; I F N I
                    </h3>
                    <p className="text-lg font-consolas font-bold text-white dark:text-gray-200 leading-relaxed mb-8">
                        Hidden gem of southern Morocco, Sidi Ifni reveals itself as a destination where Spanish heritage blends with Saharan landscapes rising from the Atlantic. This former Spanish enclave, located 170 km south of Agadir, captivates visitors with its well-preserved Art Deco architecture and breathtaking cliffs plunging into the ocean.
                    </p>
                    <button
                        onClick={() => setPage('About')}
                        className="bg-ifni-gold text-white font-magilio py-3 px-10 rounded-full text-2xl tracking-wider hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                    >
                        Read more
                    </button>
                </div>
                {/* Right Column: Image Slider */}
                <div 
                    className="md:w-1/2 order-1 md:order-2 relative h-80 md:h-96 w-full rounded-lg shadow-xl overflow-hidden"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    {sidiIfniSlides.map((slide, index) => (
                        <div
                            key={index}
                            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                            style={{
                                backgroundImage: `url('${slide.src}')`,
                                opacity: index === currentSlide ? 1 : 0,
                            }}
                            aria-label={slide.alt}
                        ></div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

// --- START: New "Why Choose Us" Section ---
const valuePropsData = [
  {
    headline: "Authentic Local Experience",
    body: "Led by passionate local experts, we offer an unparalleled connection to the culture, community, and secret surf spots of Sidi Ifni.",
    imageUrl: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1200&auto=format&fit=crop",
  },
  {
    headline: "World-Class Coaching",
    body: "Our certified instructors use personalized techniques and video analysis to help you progress, whatever your skill level.",
    imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop",
  },
  {
    headline: "The Ifni Tour Vibe",
    body: "More than a camp, we're a family. Enjoy delicious home-cooked meals, sunset yoga, and good vibes by the campfire.",
    imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    headline: "All-Inclusive & Hassle-Free",
    body: "From top-quality gear to airport transfers, we've got you covered. Just show up and we'll handle the rest for an unforgettable adventure.",
    imageUrl: "https://images.unsplash.com/photo-1517673244126-449b6b70da17?q=80&w=1200&auto=format&fit=crop",
  },
  {
    headline: "Ocean View",
    body: "Wake up to the sound of the waves. Our camp offers stunning ocean views, putting you right at the heart of the action from sunrise to sunset.",
    imageUrl: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1200&auto=format&fit=crop",
  },
];

interface ValueProp {
    headline: string;
    body: string;
    imageUrl: string;
}

const ValuePropPanel: React.FC<{ prop: ValueProp }> = ({ prop }) => (
  <div 
    className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3] group transform hover:-translate-y-2 transition-transform duration-300"
    data-aos="fade-up"
    data-aos-anchor-placement="center-center"
  >
    <img src={prop.imageUrl} alt={prop.headline} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white p-6 transition-colors duration-300 group-hover:bg-black/70">
      <h3 className="text-2xl md:text-4xl font-magilio mb-4">{prop.headline}</h3>
      {/* Using font-heading (Poppins) as a substitute for the specified but unavailable Ebrima font */}
      <p className="font-heading max-w-sm font-light">{prop.body}</p>
    </div>
  </div>
);

const ValuePropsSection: React.FC = () => (
    <Section className="bg-light-gray-blue dark:bg-dark-slate">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-magilio text-title-blue dark:text-ocean-blue mb-4 animate-fade-in-down">
                W h y &nbsp; C h o o s e &nbsp; U s &nbsp; ?
            </h2>
             <img 
                src="https://i.postimg.cc/NGKcdBNt/1.png" 
                alt="Decorative line" 
                className="mx-auto my-6 h-auto w-80 md:w-[500px] animate-fade-in-up" 
                style={{ animationDelay: '0.1s' }}
            />
            <p className="text-lg font-mono font-bold text-black dark:text-white max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                We’re not another surf camp. We're your gateway to an unforgettable Moroccan adventure.
            </p>
        </div>
        
        {/* Top row with 3 panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePropsData.slice(0, 3).map((prop) => (
                <ValuePropPanel key={prop.headline} prop={prop} />
            ))}
        </div>
        
        {/* Bottom row with 2 panels, centered */}
        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuePropsData.slice(3, 5).map((prop) => (
                <ValuePropPanel key={prop.headline} prop={prop} />
            ))}
        </div>
    </Section>
);
// --- END: New "Why Choose Us" Section ---


const RoomCard: React.FC<{ room: RoomType }> = ({ room }) => (
  <div 
    className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1200"
  >
    <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
      <img 
        src="https://i.postimg.cc/NfRPKtVh/6.png" 
        alt="Ifni Sunset Logo" 
        className="h-20 w-auto mb-4"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
      <h3 className="text-2xl md:text-3xl font-bold font-display uppercase tracking-wider">{room.name}</h3>
      <p className="mt-1 text-sm font-mono tracking-widest">{room.hashtag}</p>
    </div>
  </div>
);

const RoomTypesSection: React.FC<{ rooms: RoomType[], setPage: (page: string) => void }> = ({ rooms, setPage }) => (
  <Section className="bg-deep-sea-blue dark:bg-deep-sea-blue/95">
    <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-magilio text-[#f4f5fa] dark:text-[#f4f5fa] mb-4 animate-fade-in-down">
            O U R &nbsp; R O O M &nbsp; T Y P E S
        </h2>
        <img 
          src="https://i.postimg.cc/NGKcdBNt/1.png" 
          alt="Decorative line" 
          className="mx-auto my-6 h-auto w-80 md:w-[500px] animate-fade-in-up" 
          style={{ animationDelay: '0.1s' }}
        />
        <p className="text-lg font-mono font-bold text-white dark:text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Enjoy our inviting, real rooms, each with a distinct personality, created to provide you with a wonderful time in Sidi Ifni.
        </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {rooms.map((room, index) => (
            <RoomCard key={`${room.name}-${index}`} room={room} />
        ))}
    </div>

    <div className="text-center mt-16">
        <button 
            onClick={() => setPage('Accommodation')}
            className="bg-ifni-gold text-white font-magilio py-4 px-10 rounded-full text-2xl tracking-wider hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
            Discover More
        </button>
    </div>
  </Section>
);

const CoachCard: React.FC<{ coach: Coach }> = ({ coach }) => (
    <div className="text-center group animate-fade-in-up-base">
        <div className="relative inline-block mb-4">
            <img src={coach.imageUrl} alt={coach.name} className="rounded-full w-40 h-40 object-cover shadow-lg mx-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-booking-yellow transition-all duration-300"></div>
        </div>
        <h3 className="text-xl font-bold font-heading text-dark-slate dark:text-sand mb-1">{coach.name}</h3>
        <p className="text-ocean-blue dark:text-experience-yellow font-semibold mb-2">{coach.title}</p>
        <p className="text-gray-600 dark:text-gray-400">{coach.bio}</p>
    </div>
);

const CoachesSection: React.FC<{ coaches: Coach[] }> = ({ coaches }) => (
    <Section className="bg-light-gray-blue dark:bg-dark-slate/20">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue mb-4 animate-fade-in-down">
                M e e t &nbsp; T h e &nbsp; C r e w
            </h2>
            <img
              src="https://i.postimg.cc/NGKcdBNt/1.png"
              alt="Decorative line"
              className="mx-auto my-6 h-auto w-80 md:w-[500px] animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            />
            <p className="text-lg font-mono font-bold text-black dark:text-sand max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Our experienced and friendly team is here to guide you every step of the way.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
            {coaches.map((coach) => <CoachCard key={coach.name} coach={coach} />)}
        </div>
    </Section>
);

const VibeGallery: React.FC<{ images: typeof vibeImages }> = ({ images }) => (
    <Section className="bg-deep-sea-blue dark:bg-deep-sea-blue/95">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-magilio text-[#f4f5fa] dark:text-[#f4f5fa] mb-4 animate-fade-in-down">
                C a t c h &nbsp; T h e  &nbsp; V i b e
            </h2>
            <img
              src="https://i.postimg.cc/NGKcdBNt/1.png"
              alt="Decorative line"
              className="mx-auto my-6 h-auto w-80 md:w-[500px] animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            />
            <p className="text-lg font-mono font-bold text-white dark:text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Discover about the memorable experiences that our customers had at Ifni Tour.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
                <div key={index} className={`overflow-hidden rounded-lg shadow-lg group ${image.className || ''}`}>
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
            ))}
        </div>
    </Section>
);

const BlogCard: React.FC<{ post: BlogPost; onSelectPost: (post: BlogPost) => void }> = ({ post, onSelectPost }) => (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer group" onClick={() => onSelectPost(post)}>
        <img className="h-56 w-full object-cover" src={post.imageUrl} alt={post.title} />
        <div className="p-6">
            <h3 className="text-xl font-bold font-heading text-title-blue dark:text-sand mb-2 group-hover:text-ocean-blue dark:group-hover:text-booking-yellow transition-colors duration-300">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
            </div>
        </div>
    </div>
);

// --- START: New Animated Testimonials Section ---
const newTestimonials = [
    {
        id: 1,
        name: 'Diego Ramirez',
        title: 'CFO, Tech Startup',
        avatarUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
        story: "The video analysis was a revelation. Youssef's insights into my stance transformed my surfing in just one week. It’s the best ROI on any trip I’ve ever taken. Incredibly professional and effective.",
    },
    {
        id: 2,
        name: 'Priya Sharma',
        title: 'Lead UX Designer',
        avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
        story: "From the UI of the waves to the UX of the camp, everything was seamless. The balance of focused coaching and relaxed community time was perfectly designed. Came back with a clear mind and new perspectives.",
    },
    {
        id: 3,
        name: 'Michael Chen',
        title: 'Founder & CEO',
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        story: "As a founder, I value efficiency. The team at SunSet Ifni maximized my progress with their structured approach. I learned more in 7 days than I did in months of trying on my own. True experts in their field.",
    },
    {
        id: 4,
        name: 'Isabella Rossi',
        title: 'Art Director',
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        story: "The aesthetic of Sidi Ifni is breathtaking, and the camp captures that spirit perfectly. The sunset sessions were pure magic—like painting on water. An incredibly inspiring and visually stunning experience.",
    },
    {
        id: 5,
        name: 'David Lee',
        title: 'Product Manager',
        avatarUrl: 'https://randomuser.me/api/portraits/men/36.jpg',
        story: "I appreciated the iterative learning process. Each lesson built on the last, with clear feedback loops. The coaches are fantastic product managers for your surfing skills. Highly recommend for a structured approach.",
    },
    {
        id: 6,
        name: 'Sophia Nguyen',
        title: 'Brand Strategist',
        avatarUrl: 'https://randomuser.me/api/portraits/women/26.jpg',
        story: "The story of SunSet Ifni is authentic. You feel the local culture and passion in everything they do. It’s not just a service; it's an experience that stays with you. My personal brand is now 'surfer'.",
    },
    {
        id: 7,
        name: 'Carlos Gomez',
        title: 'Architect',
        avatarUrl: 'https://randomuser.me/api/portraits/men/56.jpg',
        story: "The structure of the camp, the flow of the days, the solid foundation of skills they build—it’s all brilliantly architected. The Art Deco buildings in town were a huge bonus. A well-designed trip from start to finish.",
    },
    {
        id: 8,
        name: 'Alex Johnson',
        title: 'Travel Blogger',
        avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
        story: "I've been to surf camps all over the world, but SunSet Ifni is special. The vibe is incredibly authentic, the coaching is top-notch, and the sunsets... they're just on another level. A must-visit for any wave chaser.",
    },
    {
        id: 9,
        name: 'Emily Carter',
        title: 'Solo Traveler',
        avatarUrl: 'https://randomuser.me/api/portraits/women/75.jpg',
        story: "As a solo female traveler, I felt so safe and welcomed here. The crew became like family. I came to learn to surf and left with a full heart and lifelong friends. Can't wait to come back!",
    },
];

const TypewriterEffect: React.FC<{ text: string }> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        setDisplayedText('');
        setIsComplete(false);
        let i = 0;
        let timeoutId: number;

        const typeWriter = () => {
            if (i < text.length) {
                const char = text.charAt(i);
                setDisplayedText(prev => prev + char);
                i++;
                const isEndOfSentence = char === '.' || char === '?' || char === '!';
                const speed = 10;
                const delay = isEndOfSentence ? 200 : speed;
                timeoutId = window.setTimeout(typeWriter, delay);
            } else {
                setIsComplete(true);
            }
        };
        
        timeoutId = window.setTimeout(typeWriter, 100);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [text]);

    return (
        <>
            {`"${displayedText}`}
            {!isComplete && <span className="inline-block w-0.5 h-5 bg-black dark:bg-white animate-blink align-bottom ml-1"></span>}
            {isComplete && `"`}
        </>
    );
};


const NewTestimonialCard: React.FC<{ testimonial: typeof newTestimonials[0] }> = ({ testimonial }) => (
  <div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col group transition-shadow duration-300 ease-in-out hover:shadow-2xl w-96 flex-shrink-0 mx-4"
  >
    <div className="flex items-center mb-4">
      <img 
        src={testimonial.avatarUrl} 
        alt={testimonial.name} 
        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:[filter:drop-shadow(0_0_4px_rgba(0,119,182,0.5))]" 
      />
      <div className="ml-4">
        <h4 className="text-lg font-bold font-heading text-dark-slate dark:text-sand">{testimonial.name}</h4>
        <p className="text-sm font-heading text-gray-500 dark:text-gray-400">{testimonial.title}</p>
      </div>
    </div>
    {testimonial.name === 'Diego Ramirez' ? (
      <p className="font-heading text-gray-700 dark:text-gray-300 leading-relaxed min-h-[144px]">
        <TypewriterEffect text={testimonial.story} />
      </p>
    ) : (
      <p className="font-heading text-gray-700 dark:text-gray-300 leading-relaxed">"{testimonial.story}"</p>
    )}
  </div>
);


const NewTestimonialsSection: React.FC = () => (
    <Section className="bg-[#f4f5fa] dark:bg-charcoal-gray">
        <SectionTitle subtitle="Real stories from our community, designed to build trust, credibility, and emotional connection.">
            What Our Guests Say
        </SectionTitle>
        
        <div 
          className="relative w-full overflow-hidden group"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
            {[...newTestimonials, ...newTestimonials].map((testimonial, index) => (
              <NewTestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
    </Section>
);
// --- END: New Animated Testimonials Section ---


const HomePage: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => (
    <div className="animate-page-fade-in">
        <HeroSection setPage={setPage} />
        <IntroSection />
        <SidiIfniSection setPage={setPage} />
        <ValuePropsSection />
        <RoomTypesSection rooms={roomTypes} setPage={setPage} />
        <CoachesSection coaches={coaches} />
        <VibeGallery images={vibeImages} />
        <NewTestimonialsSection />
    </div>
);

// --- BLOG LIST PAGE ---
const BlogListPage: React.FC<{ posts: BlogPost[], onSelectPost: (post: BlogPost) => void, isLoading: boolean }> = ({ posts, onSelectPost, isLoading }) => (
    <Section className="bg-sand dark:bg-gray-900 min-h-screen" padding="pt-24 md:pt-32 pb-16 md:pb-24">
        <SectionTitle subtitle="Dive into our collection of stories, tips, and guides.">
            The SunSet Ifni Blog
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
                Array.from({ length: 6 }).map((_, index) => <BlogCardSkeleton key={index} />)
            ) : (
                posts.map(post => <BlogCard key={post.id} post={post} onSelectPost={onSelectPost} />)
            )}
        </div>
    </Section>
);

// --- ABOUT PAGE ---
const AboutPage: React.FC = () => (
    <div className="animate-page-fade-in">
        <Section className="bg-sand dark:bg-gray-900" padding="pt-24 md:pt-32 pb-16 md:pb-24">
            <SectionTitle subtitle="This is our story.">
                About SunSet Ifni
            </SectionTitle>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <img src="https://i.postimg.cc/k4G2w00g/2.webp" alt="Sidi Ifni beach" className="rounded-lg shadow-xl w-full h-auto object-cover" />
                <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                    <p>SunSet Ifni was born from a simple dream: to create a place where the love for surfing meets the warmth of Moroccan hospitality. Founded by a group of local surfers, our camp is built on the principles of community, respect for the ocean, and sharing the incredible culture of Sidi Ifni with the world.</p>
                    <p>We believe that surfing is more than a sport—it's a way of life. It teaches patience, resilience, and a deep connection to nature. Our mission is to provide a safe, fun, and supportive environment for everyone, from absolute beginners to seasoned pros, to experience this magic for themselves.</p>
                </div>
            </div>
        </Section>
        <CoachesSection coaches={coaches} />
        <VibeGallery images={vibeImages.slice(0, 4)} />
    </div>
);


// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
    const [page, setPage] = useState('Home');
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const mainContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSetPage = (newPage: string) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    }
    
    const handleSelectPost = (post: BlogPost) => {
        setSelectedPost(post);
        handleSetPage('BlogPost');
    };

    const renderPage = () => {
        switch (page) {
            case 'Home':
                return <HomePage setPage={handleSetPage} />;
            case 'Packages':
                return <PackagesPage packages={packages} isLoading={isLoading} setPage={handleSetPage} />;
            case 'Surf':
                return <SurfPage />;
            case 'YogaCamp':
                return <YogaPage />;
            case 'Activities':
                return <Activities />;
            case 'Shop':
                return <ShopPage products={shopProducts} />;
            case 'Accommodation':
                return <Accommodation services={accommodationServices} />;
            case 'Blog':
                return <BlogListPage posts={blogPosts} onSelectPost={handleSelectPost} isLoading={isLoading} />;
            case 'BlogPost':
                if (selectedPost) {
                    return <BlogPostPage post={selectedPost} onBack={() => handleSetPage('Blog')} />;
                }
                return <BlogListPage posts={blogPosts} onSelectPost={handleSelectPost} isLoading={isLoading} />;
            case 'About':
                return <AboutPage />;
            case 'Contact':
                mainContentRef.current?.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                return <HomePage setPage={handleSetPage} />;
            default:
                return <HomePage setPage={handleSetPage} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-sand dark:bg-dark-slate transition-colors duration-300 font-sans text-dark-slate dark:text-sand" ref={mainContentRef}>
            <Header setPage={handleSetPage} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
