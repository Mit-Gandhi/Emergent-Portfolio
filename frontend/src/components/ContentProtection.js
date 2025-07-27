import { useEffect } from 'react';

const ContentProtection = () => {
  useEffect(() => {
    // Disable right-click context menu
    const disableRightClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable text selection
    const disableSelection = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable keyboard shortcuts
    const disableKeyboardShortcuts = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+A, Ctrl+S, Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+P
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
        (e.ctrlKey && e.keyCode === 65) || // Ctrl+A
        (e.ctrlKey && e.keyCode === 83) || // Ctrl+S
        (e.ctrlKey && e.keyCode === 67) || // Ctrl+C
        (e.ctrlKey && e.keyCode === 88) || // Ctrl+X
        (e.ctrlKey && e.keyCode === 86) || // Ctrl+V
        (e.ctrlKey && e.keyCode === 80) || // Ctrl+P
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.keyCode === 86) || // Ctrl+Shift+V
        e.keyCode === 116 // F5
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Disable drag and drop
    const disableDragDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable image dragging
    const disableImageDrag = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Disable printing
    const disablePrint = () => {
      return false;
    };

    // Clear clipboard periodically
    const clearClipboard = () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('');
        }
      } catch (err) {
        // Silently fail if clipboard access is denied
      }
    };

    // Block developer tools detection
    const blockDevTools = () => {
      const devtools = {
        open: false,
        orientation: null
      };
      
      setInterval(() => {
        if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
          document.body.style.display = 'none';
          alert('Developer tools detected. Please close them to continue.');
          window.location.reload();
        }
      }, 500);
    };

    // Disable console
    const disableConsole = () => {
      const originalLog = console.log;
      const originalError = console.error;
      const originalWarn = console.warn;
      const originalInfo = console.info;

      console.log = () => {};
      console.error = () => {};
      console.warn = () => {};
      console.info = () => {};
      console.clear = () => {};
      console.dir = () => {};
      console.dirxml = () => {};
      console.table = () => {};
      console.trace = () => {};
      console.assert = () => {};
      console.count = () => {};
      console.countReset = () => {};
      console.time = () => {};
      console.timeEnd = () => {};
      console.timeLog = () => {};
      console.group = () => {};
      console.groupCollapsed = () => {};
      console.groupEnd = () => {};
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick, true);
    document.addEventListener('selectstart', disableSelection, true);
    document.addEventListener('mousedown', disableSelection, true);
    document.addEventListener('keydown', disableKeyboardShortcuts, true);
    document.addEventListener('keyup', disableKeyboardShortcuts, true);
    document.addEventListener('dragstart', disableDragDrop, true);
    document.addEventListener('drop', disableDragDrop, true);
    document.addEventListener('dragover', disableDragDrop, true);
    document.addEventListener('mousedown', disableImageDrag, true);
    window.addEventListener('beforeprint', disablePrint, true);
    window.addEventListener('afterprint', disablePrint, true);

    // Initialize protections
    disableConsole();
    blockDevTools();
    
    // Clear clipboard every 5 seconds
    const clipboardInterval = setInterval(clearClipboard, 5000);

    // Disable view source
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.keyCode === 85) { // Ctrl+U
        e.preventDefault();
        return false;
      }
    });

    // Disable Ctrl+Shift+K (Firefox console)
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
        e.preventDefault();
        return false;
      }
    });

    // Cleanup function
    return () => {
      clearInterval(clipboardInterval);
      document.removeEventListener('contextmenu', disableRightClick, true);
      document.removeEventListener('selectstart', disableSelection, true);
      document.removeEventListener('mousedown', disableSelection, true);
      document.removeEventListener('keydown', disableKeyboardShortcuts, true);
      document.removeEventListener('keyup', disableKeyboardShortcuts, true);
      document.removeEventListener('dragstart', disableDragDrop, true);
      document.removeEventListener('drop', disableDragDrop, true);
      document.removeEventListener('dragover', disableDragDrop, true);
      document.removeEventListener('mousedown', disableImageDrag, true);
      window.removeEventListener('beforeprint', disablePrint, true);
      window.removeEventListener('afterprint', disablePrint, true);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ContentProtection;