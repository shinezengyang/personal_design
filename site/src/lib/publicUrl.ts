/// <reference types="vite/client" />

export function publicUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const trimmed = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL;
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${trimmed}`;
}
