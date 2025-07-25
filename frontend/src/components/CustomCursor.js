import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Immediate synchronization
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

    // Add mouse move listener
    document.addEventListener('mousemove', updateMousePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${mousePosition.x - 10}px`,
          top: `${mousePosition.y - 10}px`,
        }}
      />
      <div
        ref={trailRef}
        className={`custom-cursor-trail ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${mousePosition.x - 20}px`,
          top: `${mousePosition.y - 20}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;