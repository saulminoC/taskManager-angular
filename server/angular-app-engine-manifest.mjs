
export default {
  basePath: '/task-manager/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
