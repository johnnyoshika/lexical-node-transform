import { useLexicalTextEntity } from '@lexical/react/useLexicalTextEntity';
import {
  $createColoredNode,
  ColoredNode,
} from '../../nodes/ColoredNode';
import { useCallback } from 'react';
import { TextNode } from 'lexical';

const COLORS = ['blue', 'red', 'green'];

const ColoredTextPlugin = () => {
  const createColoredNode = useCallback(
    (textNode: TextNode): ColoredNode => {
      return $createColoredNode(
        textNode.getTextContent(),
        textNode.getTextContent(),
      );
    },
    [],
  );

  const getColoredMatch = useCallback((text: string) => {
    const words = text.split(/\s+/);
    for (const word of words)
      if (COLORS.includes(word))
        return {
          start: text.indexOf(word),
          end: text.indexOf(word) + word.length,
        };

    return null;
  }, []);

  useLexicalTextEntity<ColoredNode>(
    getColoredMatch,
    ColoredNode,
    createColoredNode,
  );

  return null;
};

export default ColoredTextPlugin;
