import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_NORMAL,
  COPY_COMMAND,
  CUT_COMMAND,
  PASTE_COMMAND,
} from 'lexical';

const ClipboardPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(
    () =>
      editor.registerCommand(
        PASTE_COMMAND,
        payload => {
          if (!(payload instanceof ClipboardEvent)) return false;

          console.log('PASTE_COMMAND', payload.clipboardData?.types);
          console.log(
            'text/plain',
            payload.clipboardData?.getData('text/plain'),
          );
          console.log(
            'PASTE_COMMAND Before paste',
            $getRoot().getTextContent(),
          );

          editor.update(() => {}, {
            onUpdate: () => {
              editor.getEditorState().read(() => {
                console.log(
                  'PASTE_COMMAND After paste',
                  $getRoot().getTextContent(),
                );
              });
            },
          });
          return false;
        },
        COMMAND_PRIORITY_NORMAL,
      ),
    [editor],
  );

  useEffect(
    () =>
      editor.registerUpdateListener(
        ({ editorState, prevEditorState, tags }) => {
          if (!tags.has('paste')) return;

          prevEditorState.read(() => {
            console.log('Before paste', $getRoot().getTextContent());
          });

          editorState.read(() => {
            console.log('After paste', $getRoot().getTextContent());
          });
        },
      ),
    [editor],
  );

  useEffect(
    () =>
      editor.registerCommand(
        CUT_COMMAND,
        payload => {
          if (!(payload instanceof ClipboardEvent)) return false;

          const selection = $getSelection();
          if (!$isRangeSelection(selection)) return false;

          // Can't get copied text from payload.clipboardData.getData()
          console.log(
            'CUT_COMMAND',
            selection.getTextContent(),
            selection.getNodes(),
          );
          return false;
        },
        COMMAND_PRIORITY_NORMAL,
      ),
    [editor],
  );

  useEffect(
    () =>
      editor.registerCommand(
        COPY_COMMAND,
        payload => {
          if (!(payload instanceof ClipboardEvent)) return false;

          const selection = $getSelection();
          if (!$isRangeSelection(selection)) return false;

          // Can't get copied text from payload.clipboardData.getData()
          console.log(
            'COPY_COMMAND',
            selection.getTextContent(),
            selection.getNodes(),
          );
          return true;
        },
        COMMAND_PRIORITY_NORMAL,
      ),
    [editor],
  );

  return null;
};

export default ClipboardPlugin;
