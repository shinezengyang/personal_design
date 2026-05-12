import { useRef, type RefObject } from 'react';

// Placeholder sub-components (referenced but not recovered from blobs)
function PencilHeroJyBZk() { return null; }
function PencilPersonaDhtGx() { return null; }
function PencilScopeNuuvm() { return null; }
function PencilFrameYcfRz() { return null; }
function PencilStructureAip1x() { return null; }

const TABLE_HEAD = ['模块', '功能点', '优先级', '备注'];

const SCOPE_ROWS: [string, string, string, string][] = [
  ['探险', '地图探索', 'P1', '核心玩法'],
  ['战斗', '实时战斗', 'P1', '核心玩法'],
  ['收集', '装备系统', 'P2', '进阶功能'],
];
const CABIN_ROWS: [string, string, string, string][] = [
  ['资源舱', '资源储存', 'P1', '核心系统'],
  ['建造台', '建筑升级', 'P1', '核心系统'],
];
const GUILD_ROWS: [string, string, string, string][] = [
  ['公会', '成员管理', 'P2', '社交功能'],
  ['战盟', '联合作战', 'P2', '社交功能'],
];

const tableFrameClass = 'rounded-xl border border-neon-cyan/20 overflow-hidden';
const tableHeadClass = 'grid grid-cols-4 bg-neon-cyan/10 px-4 py-2 gap-4';
const tableBodyClass = 'divide-y divide-white/5';
const rowClass = 'grid grid-cols-4 px-4 py-2 gap-4 text-sm';
const cellClass = 'text-cyber-gray';

export function ShadowRaidCaseStudy({ rootRef }: { rootRef?: RefObject<HTMLDivElement> }) {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = rootRef ?? localRef;

  return (
    <div ref={ref} className="grid gap-8">
      <PencilHeroJyBZk />

      <PencilPersonaDhtGx />

      <PencilScopeNuuvm />

      <PencilFrameYcfRz />

      <PencilStructureAip1x />

      <div className={tableFrameClass}>
        <div className={tableHeadClass}>
          {TABLE_HEAD.map((h) => (
            <div key={h} className="font-display text-sm text-neon-cyan">
              {h}
            </div>
          ))}
        </div>
        <div className={tableBodyClass}>
          {SCOPE_ROWS.map((row, idx) => (
            <div key={`${row[0]}-${idx}`} className={rowClass}>
              <div className="text-neon-pink font-semibold">{row[0]}</div>
              <div className={cellClass}>{row[1]}</div>
              <div className="text-neon-cyan font-mono">{row[2]}</div>
              <div className={cellClass}>{row[3]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={tableFrameClass}>
        <div className={tableHeadClass}>
          {TABLE_HEAD.map((h) => (
            <div key={h} className="font-display text-sm text-neon-cyan">
              {h}
            </div>
          ))}
        </div>
        <div className={tableBodyClass}>
          {CABIN_ROWS.map((row, idx) => (
            <div key={`${row[0]}-${idx}`} className={rowClass}>
              <div className="text-neon-pink font-semibold">{row[0]}</div>
              <div className={cellClass}>{row[1]}</div>
              <div className="text-neon-cyan font-mono">{row[2]}</div>
              <div className={cellClass}>{row[3]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={tableFrameClass}>
        <div className={tableHeadClass}>
          {TABLE_HEAD.map((h) => (
            <div key={h} className="font-display text-sm text-neon-cyan">
              {h}
            </div>
          ))}
        </div>
        <div className={tableBodyClass}>
          {GUILD_ROWS.map((row, idx) => (
            <div key={`${row[0]}-${idx}`} className={rowClass}>
              <div className="text-neon-pink font-semibold">{row[0]}</div>
              <div className={cellClass}>{row[1]}</div>
              <div className="text-neon-cyan font-mono">{row[2]}</div>
              <div className={cellClass}>{row[3]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

