'use strict';

module.exports = {
  async findById(ctx) {
    const {
      id
    } = ctx.params;

    const entry = await strapi.entityService.findOne('api::order.order', id, {
      fields: ['orderId', 'orderDate','remark'],
      populate: {
        customers: {
          fields: ['firstname', 'lastname'],
        },
        travel_package: {
          fields: ['name', 'description']
        },
        status:{
          fields : ['name']
        }
      },
    });
    return entry;
  },
  async findAll(ctx) {
    const entry = await strapi.entityService.findMany('api::order.order', {
      fields: ['orderId', 'orderDate','remark'],
      populate: {
        customers: {
          fields: ['firstname', 'lastname'],
        },
        travel_package: {
          fields: ['name', 'description']
        },
        status:{
          fields : ['name']
        }
      },
      sort: { id: 'desc' },
    });
    return entry;
  },
}
