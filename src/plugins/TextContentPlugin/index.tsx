import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';

const TextContentPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(
    () =>
      editor.registerTextContentListener(textContent => {
        console.log('TextContentListener', textContent);
      }),
    [editor],
  );

  return null;
};

export default TextContentPlugin;
