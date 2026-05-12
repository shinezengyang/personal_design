import { publicUrl } from './publicUrl';

export type HeroCopy = {
  terminalLine: string;
  name: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  cta: string;
};

export const DEFAULT_HERO_COPY: HeroCopy = {
  terminalLine: "SYSTEM.IDENTIFY: DESIGNER",
  name: "曾加熺",
  titleLine1: "游戏交互",
  titleLine2: "设计师",
  description: "专注于为游戏创造更好的游戏交互体验",
  cta: "查看我的作品",
};

function normalizeHero(raw: unknown): HeroCopy {
  const r = raw as Partial<HeroCopy>;
  return {
    terminalLine: r.terminalLine ?? DEFAULT_HERO_COPY.terminalLine,
    name: r.name ?? DEFAULT_HERO_COPY.name,
    titleLine1: r.titleLine1 ?? DEFAULT_HERO_COPY.titleLine1,
    titleLine2: r.titleLine2 ?? DEFAULT_HERO_COPY.titleLine2,
    description: r.description ?? DEFAULT_HERO_COPY.description,
    cta: r.cta ?? DEFAULT_HERO_COPY.cta,
  };
}

export async function loadHeroCopy(signal?: AbortSignal): Promise<HeroCopy> {
  const res = await fetch(`${publicUrl('hero.json')}?ts=${Date.now()}`, {
    cache: "no-store",
    signal,
  });
  if (!res.ok) {
    throw new Error(`Failed to load hero.json: ${res.status} ${res.statusText}`);
  }
  return normalizeHero(await res.json());
}

