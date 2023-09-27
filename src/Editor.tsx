import { LexicalComposer } from '@lexical/react/LexicalComposer';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { Box } from '@mui/material';
import { MuiContentEditable, placeHolderSx } from './style';
import { editorTheme } from './theme';
import TreeViewPlugin from './plugins/TreeViewPlugin';
import ColoredTextPlugin from './plugins/ColoredTextPlugin';
import { ColoredNode } from './nodes/ColoredNode';
import ClipboardPlugin from './plugins/ClipboardPlugin';
import useClipboardTracker from './hooks/useClipboardTracker';

const Editor = () => {
  useClipboardTracker();
  return (
    <LexicalComposer
      initialConfig={{
        namespace: 'EssayEditor',
        theme: editorTheme,
        onError: (error: Error) => {
          throw error;
        },
        nodes: [ColoredNode],
      }}
    >
      <Box sx={{ position: 'relative', background: 'white' }}>
        <RichTextPlugin
          contentEditable={<MuiContentEditable />}
          placeholder={
            <Box sx={placeHolderSx}>Enter some text...</Box>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <ColoredTextPlugin />
        <ClipboardPlugin />
      </Box>
      <TreeViewPlugin />
    </LexicalComposer>
  );
};

export default Editor;
