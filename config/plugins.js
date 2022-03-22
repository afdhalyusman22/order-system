module.exports = {
  // ...
  'custom': {
    enabled: true,
    resolve: './src/plugins/custom'
  },
  // ...
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
}