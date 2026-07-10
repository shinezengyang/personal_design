import { lazy, Suspense } from 'react';

const StructureLayerGtHD5Diagram = lazy(() => import('./StructureLayerGtHD5Diagram').then(m => ({ default: m.StructureLayerGtHD5Diagram })));
const StructureLayerHccN5Diagram = lazy(() => import('./StructureLayerHccN5Diagram').then(m => ({ default: m.StructureLayerHccN5Diagram })));
const StructureLayer8qvkJDiagram = lazy(() => import('./StructureLayer8qvkJDiagram').then(m => ({ default: m.StructureLayer8qvkJDiagram })));

export type StructureLayerPencilNode = 'GtHD5' | 'HcCn5' | '8qvkJ' | 'VLUaz';

const LoadingFallback = () => (
  <div className="flex h-40 items-center justify-center">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
  </div>
);

export function StructureLayerDiagram({ pencilNode }: { pencilNode: StructureLayerPencilNode }) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      {pencilNode === 'GtHD5' && <StructureLayerGtHD5Diagram pencilNode="GtHD5" />}
      {pencilNode === 'HcCn5' && <StructureLayerHccN5Diagram />}
      {pencilNode === '8qvkJ' && <StructureLayer8qvkJDiagram />}
      {pencilNode === 'VLUaz' && <StructureLayerGtHD5Diagram pencilNode="VLUaz" />}
    </Suspense>
  );
}
