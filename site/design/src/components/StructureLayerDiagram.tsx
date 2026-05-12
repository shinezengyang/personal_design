import { StructureLayerGtHD5Diagram } from './StructureLayerGtHD5Diagram';
import { StructureLayerHccN5Diagram } from './StructureLayerHccN5Diagram';
import { StructureLayer8qvkJDiagram } from './StructureLayer8qvkJDiagram';

export type StructureLayerPencilNode = 'GtHD5' | 'HcCn5' | '8qvkJ' | 'VLUaz';

export function StructureLayerDiagram({ pencilNode }: { pencilNode: StructureLayerPencilNode }) {
  switch (pencilNode) {
    case 'GtHD5':
      return <StructureLayerGtHD5Diagram pencilNode="GtHD5" />;
    case 'HcCn5':
      return <StructureLayerHccN5Diagram />;
    case '8qvkJ':
      return <StructureLayer8qvkJDiagram />;
    case 'VLUaz':
      return <StructureLayerGtHD5Diagram pencilNode="VLUaz" />;
    default:
      return null;
  }
}
