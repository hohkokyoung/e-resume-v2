import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.D8wyA5zT.js","_app/immutable/chunks/scheduler.CMswNPJ8.js","_app/immutable/chunks/index.BOwdv7r6.js"];
export const stylesheets = ["_app/immutable/assets/2.wzcAbiC-.css"];
export const fonts = [];