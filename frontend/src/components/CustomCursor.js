import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    // Show cursor immediately when component mounts
    setIsVisible(true);

    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Immediate synchronization for smooth cursor movement
      if (cursorRef.current) {
        cursorRef.current.style.left = `${newPosition.x - 10}px`;
        cursorRef.current.style.top = `${newPosition.y - 10}px`;
      }
      if (trailRef.current) {
        trailRef.current.style.left = `${newPosition.x - 20}px`;
        trailRef.current.style.top = `${newPosition.y - 20}px`;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Handle mouse entering/leaving the window
    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    // Add mouse move listener with immediate effect
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnterWindow, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow, { passive: true });

    // Add hover listeners to interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [role="button"], .interactive');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
        el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      });
      
      return interactiveElements;
    };

    // Initial setup of interactive elements
    let interactiveElements = updateInteractiveElements();

    // Update interactive elements when DOM changes
    const observer = new MutationObserver(() => {
      // Remove old listeners
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      // Add new listeners
      interactiveElements = updateInteractiveElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initialize cursor position on first mouse move
    const initializeCursor = (e) => {
      updateMousePosition(e);
      setIsVisible(true);
      document.removeEventListener('mousemove', initializeCursor);
    };
    
    document.addEventListener('mousemove', initializeCursor, { once: true, passive: true });

    return () => {
      observer.disconnect();
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
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${mousePosition.x - 10}px`,
          top: `${mousePosition.y - 10}px`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease'
        }}
      />
      <div
        ref={trailRef}
        className={`custom-cursor-trail ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${mousePosition.x - 20}px`,
          top: `${mousePosition.y - 20}px`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease'
        }}
      />
    </>
  );
};

export default CustomCursor;