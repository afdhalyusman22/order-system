'use strict';

/**
 *  customer controller
 */

const {
  createCoreController
} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::customer.customer', ({
  strapi
}) => ({
  async findOne(ctx) {
    const {
      id
    } = ctx.params;
    const {
      query
    } = ctx;

    const entity = await strapi.db.query('api::customer.customer').findOne({
      select: ['id','firstname', 'lastname','phone','address'],
      where: {
        id: id
      }
    });
    return entity;
  },
  async createCustom(ctx) {
    let body = ctx.request.body;
    console.log(body)
    const entry = await strapi.entityService.create('api::customer.customer', {
      data: {
        firstname: body.firstname,
        phone: body.phone,
        address: body.address
      },
    });
    return entry;
  }
}));
