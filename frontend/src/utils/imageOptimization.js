// Image optimization utilities for faster loading

// Intersection Observer for lazy loading animations
export const createImageObserver = () => {
  if (!window.IntersectionObserver) return null;

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Add loaded class for smooth animation
          img.addEventListener('load', () => {
            img.classList.add('loaded');
          });
          
          // Stop observing this image
          if (window.imageObserver) {
            window.imageObserver.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1
    }
  );
};

// Initialize image observer
export const initImageObserver = () => {
  if (typeof window !== 'undefined') {
    window.imageObserver = createImageObserver();
    
    if (window.imageObserver) {
      // Observe all lazy loaded images
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      lazyImages.forEach(img => {
        window.imageObserver.observe(img);
      });
    }
  }
};

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = async (sources) => {
  const promises = sources.map(src => preloadImage(src));
  
  try {
    await Promise.all(promises);
    console.log('✅ All critical images preloaded successfully');
  } catch (error) {
    console.warn('⚠️ Some images failed to preload:', error);
  }
};

// Critical images list
export const CRITICAL_IMAGES = [
  '/images/robot.png',
  '/images/mit.jpg',
  '/images/icon.png'
];

// Project images list (for prefetching)
export const PROJECT_IMAGES = [
  '/images/banner1.jpg',
  '/images/skillxchange.jpg'
];