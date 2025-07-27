import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const rafRef = useRef(null);
  
  // Smooth following variables for outer ring
  const trailPosition = useRef({ x: -100, y: -100 });
  const targetPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    let animationId;

    // Lerping function for smooth movement
    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    // Animation loop for smooth trailing effect
    const animateTrail = () => {
      // Smooth interpolation for outer ring
      trailPosition.current.x = lerp(trailPosition.current.x, targetPosition.current.x, 0.15);
      trailPosition.current.y = lerp(trailPosition.current.y, targetPosition.current.y, 0.15);

      // Update outer ring position
      if (trailRef.current) {
        trailRef.current.style.left = `${trailPosition.current.x - 20}px`;
        trailRef.current.style.top = `${trailPosition.current.y - 20}px`;
      }

      animationId = requestAnimationFrame(animateTrail);
    };

    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      targetPosition.current = newPosition;
      
      // Update inner cursor immediately for responsiveness
      if (cursorRef.current) {
        cursorRef.current.style.left = `${newPosition.x - 8}px`;
        cursorRef.current.style.top = `${newPosition.y - 8}px`;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnterWindow, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow, { passive: true });

    // Interactive elements detection
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [role="button"], .interactive');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
        el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      });
      return interactiveElements;
    };

    let interactiveElements = updateInteractiveElements();

    // Observer for dynamic content
    const observer = new MutationObserver(() => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      interactiveElements = updateInteractiveElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initialize cursor on first mouse move
    const initializeCursor = (e) => {
      updateMousePosition(e);
      setIsVisible(true);
      document.removeEventListener('mousemove', initializeCursor);
    };
    
    document.addEventListener('mousemove', initializeCursor, { once: true, passive: true });

    // Start animation loop
    animateTrail();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationId);
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mousemove', initializeCursor);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Outer Ring - Semi-transparent with trailing effect */}
      <div
        ref={trailRef}
        className={`cursor-outer-ring ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${trailPosition.current.x - 20}px`,
          top: `${trailPosition.current.y - 20}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Inner Cursor - Solid green circle with white dot */}
      <div
        ref={cursorRef}
        className={`cursor-inner ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${mousePosition.x - 8}px`,
          top: `${mousePosition.y - 8}px`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="cursor-white-dot"></div>
      </div>
    </>
  );
};

export default CustomCursor;