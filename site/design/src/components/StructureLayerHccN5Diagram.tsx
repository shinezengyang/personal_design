import { publicUrl } from '../lib/publicUrl';
import { HcCn5OPydnHeader } from './HcCn5OPydnHeader';

export function StructureLayerHccN5Diagram() {
  return (
    <div className="w-full overflow-visible">
      <div className="pb-[2.2%] pt-[4.2%]">
        <HcCn5OPydnHeader />
      </div>
      <div className="relative w-full">
        <img
          src={publicUrl('pencil/xingji-aodaisai/coord-fav-flow.png')}
          alt="HcCn5 source collage"
          className="block h-auto w-full select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
