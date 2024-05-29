import * as server from '../entries/pages/_slug_navigation_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_navigation_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug=navigation]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.DFSnRq5W.js","_app/immutable/chunks/scheduler.CMswNPJ8.js","_app/immutable/chunks/index.BOwdv7r6.js","_app/immutable/chunks/cross.3itv2MPs.js","_app/immutable/chunks/stores.BYdKi-Fb.js","_app/immutable/chunks/entry.DgE4Y9gL.js"];
export const stylesheets = ["_app/immutable/assets/3.CJnFeh9J.css"];
export const fonts = [];
