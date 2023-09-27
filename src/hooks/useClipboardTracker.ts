import { useEffect } from 'react';

const useClipboardTracker = () => {
  useEffect(() => {
    const onClipboardEvent = (e: Event) => {
      console.log('Clipboard event', e.type);
      if (!(e instanceof ClipboardEvent)) {
        console.log('Not instance of ClipboardEvent');
        return;
      }
      console.log(
        'clipboardData',
        e.clipboardData?.getData('text/plain'),
      );
      console.log('selection', document.getSelection()?.toString());
    };

    ['copy', 'cut', 'paste'].forEach(type =>
      window.addEventListener(type, onClipboardEvent, false),
    );

    return () => {
      ['copy', 'cut', 'paste'].forEach(type =>
        window.removeEventListener(type, onClipboardEvent, false),
      );
    };
  }, []);
};

export default useClipboardTracker;
