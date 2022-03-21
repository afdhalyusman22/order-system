module.exports = [
  {    
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
    path: "/customer/:id",
    handler: "customer.findById",
    config: {
      auth: false,
      policies: [],
    },
  },
];
