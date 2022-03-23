module.exports = {
  routes: [ { // Path defined with a URL parameter
    method: 'POST',
    path: '/customers/create',
    handler: 'customer.createCustom',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
    }
  }]
}
