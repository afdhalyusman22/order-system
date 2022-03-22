module.exports = [{
    method: "GET",
    path: "/content-types",
    handler: "custom.findContentTypes",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/v1/customer/:id",
    handler: "customer.findById",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "POST",
    path: "/v1/customer",
    handler: "customer.createCustom",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/v1/order/:id",
    handler: "order.findById",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/v1/order",
    handler: "order.findAll",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/v1/travel-package/:id",
    handler: "travel_packages.findById",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/v1/travel-package",
    handler: "travel_packages.findAll",
    config: {
      auth: false,
      policies: [],
    },
  },
]
