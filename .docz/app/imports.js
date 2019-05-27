export const imports = {
  'doc/Button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "doc-button" */ 'doc/Button.mdx'
    ),
  'doc/Index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "doc-index" */ 'doc/Index.mdx'
    ),
}
