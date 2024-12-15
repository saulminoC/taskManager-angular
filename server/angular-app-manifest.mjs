
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/task-manager/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/task-manager"
  }
],
  assets: {
    'index.csr.html': {size: 122494, hash: '41976d37e7936ed9cbb2255527209d692b0fe0a2b0ff3cb2e781e13726a4a873', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '4006516d3c64d33596f2bd09f506107e52c0f5b2e07339f9e851ddbd07526b06', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 140728, hash: '7729eeafe556d217bbe19b3473aeda9562222907f78b9e438984da634d2fb481', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-O2A2K7W3.css': {size: 689493, hash: 'jC536z5ffrI', text: () => import('./assets-chunks/styles-O2A2K7W3_css.mjs').then(m => m.default)}
  },
};
