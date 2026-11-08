/** Prefix an internal path with the configured base (needed for GitHub Pages project sites). */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const clean = path.replace(/^\/+/, '');
  return `${base}${clean}`;
}

/** True when `current` is `path` or a page below it. */
export function isCurrent(current: string, path: string): boolean {
  const norm = (p: string) => p.replace(/\/+$/, '') || '/';
  const c = norm(current);
  const p = norm(href(path));
  return p === norm(href('/')) ? c === p : c === p || c.startsWith(`${p}/`);
}
