import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '**', renderMode: RenderMode.Prerender },
  { path: 'auth', renderMode: RenderMode.Client },
  { path: 'rich-data', renderMode: RenderMode.Server },
  { path: 'state', renderMode: RenderMode.Server },
];
