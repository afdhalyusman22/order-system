'use strict';

module.exports = {
  async findById(ctx) {
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
   return entity;
  },
};