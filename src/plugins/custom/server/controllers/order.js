'use strict';

module.exports = {
  async findById(ctx) {
    const {
      id
    } = ctx.params;

    const entry = await strapi.entityService.findOne('api::order.order', id, {
      fields: ['orderId', 'orderDate'],
      populate: {
        customers: {
          fields: ['firstname', 'lastname'],
        },
        travel_packages:{
            fields: ['name','description']
        }
      },
    });
    return entry;
  },
  async findAll(ctx) {
    const entry = await strapi.entityService.findMany('api::order.order', {
      fields: ['orderId', 'orderDate'],
      populate: {
        customers: {
          fields: ['firstname', 'lastname'],
        },
        travel_packages:{
            fields: ['name','description']
        }
      },
      start: 0,
      limit: 1,
    });
    return entry;
  },
}
