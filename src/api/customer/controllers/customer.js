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
      select: ['firstname', 'lastname'],
      where: {
        id: id
      }
    });
    // const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    // return this.transformResponse(sanitizedEntity);
    return entity;
  }
}));
