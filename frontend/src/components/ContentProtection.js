import { useEffect } from 'react';

const ContentProtection = () => {
  useEffect(() => {
    // Disable right-click context menu
    const disableRightClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable text selection (but allow for form elements)
    const disableSelection = (e) => {
      // Allow selection in form elements
      if (e.target.tagName === 'INPUT' || 
          e.target.tagName === 'TEXTAREA' || 
          e.target.tagName === 'SELECT' ||
          e.target.isContentEditable ||
          e.target.closest('form')) {
        return true;
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable keyboard shortcuts (but allow typing in form elements)
    const disableKeyboardShortcuts = (e) => {
      // Allow normal typing and navigation in form elements
      if (e.target.tagName === 'INPUT' || 
          e.target.tagName === 'TEXTAREA' || 
          e.target.tagName === 'SELECT' ||
          e.target.isContentEditable ||
          e.target.closest('form')) {
        // Allow Ctrl+A (select all), Ctrl+C (copy), Ctrl+V (paste), Ctrl+X (cut) in form elements
        if ((e.ctrlKey && (e.keyCode === 65 || e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 88))) {
          return true;
        }
      }
      
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+P and other dev tools shortcuts
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
        (e.ctrlKey && e.keyCode === 83) || // Ctrl+S
        (e.ctrlKey && e.keyCode === 80) || // Ctrl+P
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.keyCode === 86) || // Ctrl+Shift+V
        (e.ctrlKey && e.shiftKey && e.keyCode === 75) || // Ctrl+Shift+K (Firefox console)
        e.keyCode === 116 // F5
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      // For non-form elements, disable Ctrl+A, Ctrl+C, Ctrl+X, Ctrl+V
      if (!(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT' || e.target.isContentEditable || e.target.closest('form'))) {
        if ((e.ctrlKey && e.keyCode === 65) || // Ctrl+A
            (e.ctrlKey && e.keyCode === 67) || // Ctrl+C
            (e.ctrlKey && e.keyCode === 88) || // Ctrl+X
            (e.ctrlKey && e.keyCode === 86)) { // Ctrl+V
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };

    // Disable drag and drop
    const disableDragDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable image dragging (but allow form interactions)
    const disableImageDrag = (e) => {
      // Allow normal mouse interactions on form elements
      if (e.target.tagName === 'INPUT' || 
          e.target.tagName === 'TEXTAREA' || 
          e.target.tagName === 'SELECT' ||
          e.target.tagName === 'BUTTON' ||
          e.target.closest('form')) {
        return true;
      }
      
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Disable printing
    const disablePrint = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Clear clipboard silently
    const clearClipboard = () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('').catch(() => {
            // Silently fail if clipboard access is denied
          });
        }
      } catch (err) {
        // Silently fail if clipboard access is denied
      }
    };

    // Silent developer tools detection (removed alert)
    const blockDevTools = () => {
      let devtools = { open: false };
      
      const detectDevTools = () => {
        try {
          if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
            // Silently redirect or reload without showing alert
            if (!devtools.open) {
              devtools.open = true;
              // Just clear the page content silently
              document.body.style.opacity = '0';
              setTimeout(() => {
                window.location.reload();
              }, 100);
            }
          } else {
            devtools.open = false;
            document.body.style.opacity = '1';
          }
        } catch (e) {
          // Silently ignore errors
        }
      };
      
      // Check periodically but less aggressively
      setInterval(detectDevTools, 1000);
    };

    // Disable console functions silently
    const disableConsole = () => {
      try {
        // Store original functions
        const noop = () => {};
        
        // Override console methods
        Object.keys(console).forEach(key => {
          if (typeof console[key] === 'function') {
            console[key] = noop;
          }
        });
        
        // Prevent console object redefinition
        Object.defineProperty(window, 'console', {
          value: console,
          writable: false,
          configurable: false
        });
      } catch (e) {
        // Silently ignore errors
      }
    };

    // Add event listeners with passive option where possible
    const addListener = (element, event, handler, options = { passive: false }) => {
      try {
        element.addEventListener(event, handler, options);
      } catch (e) {
        // Fallback for older browsers
        element.addEventListener(event, handler, false);
      }
    };

    // Add all event listeners
    addListener(document, 'contextmenu', disableRightClick);
    addListener(document, 'selectstart', disableSelection);
    // Only add mousedown listener for non-form elements to avoid interfering with input focus
    addListener(document, 'mousedown', (e) => {
      // Don't interfere with form elements
      if (e.target.tagName === 'INPUT' || 
          e.target.tagName === 'TEXTAREA' || 
          e.target.tagName === 'SELECT' ||
          e.target.tagName === 'BUTTON' ||
          e.target.closest('form')) {
        return true;
      }
      return disableSelection(e);
    });
    addListener(document, 'keydown', disableKeyboardShortcuts);
    addListener(document, 'keyup', disableKeyboardShortcuts);
    addListener(document, 'dragstart', disableDragDrop);
    addListener(document, 'drop', disableDragDrop);
    addListener(document, 'dragover', disableDragDrop);
    addListener(document, 'mousedown', disableImageDrag);
    addListener(window, 'beforeprint', disablePrint);
    addListener(window, 'afterprint', disablePrint);

    // Initialize protections
    disableConsole();
    blockDevTools();
    
    // Clear clipboard periodically
    const clipboardInterval = setInterval(clearClipboard, 10000); // Reduced frequency

    // Cleanup function
    return () => {
      try {
        clearInterval(clipboardInterval);
        document.removeEventListener('contextmenu', disableRightClick);
        document.removeEventListener('selectstart', disableSelection);
        document.removeEventListener('mousedown', disableSelection);
        document.removeEventListener('keydown', disableKeyboardShortcuts);
        document.removeEventListener('keyup', disableKeyboardShortcuts);
        document.removeEventListener('dragstart', disableDragDrop);
        document.removeEventListener('drop', disableDragDrop);
        document.removeEventListener('dragover', disableDragDrop);
        document.removeEventListener('mousedown', disableImageDrag);
        window.removeEventListener('beforeprint', disablePrint);
        window.removeEventListener('afterprint', disablePrint);
      } catch (e) {
        // Silently ignore cleanup errors
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ContentProtection;