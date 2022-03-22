'use strict';

module.exports = {
  async findById(ctx) {
    const {
      id
    } = ctx.params;

    const entity = await strapi.db.query('api::customer.customer').findOne({
      select: ['id', 'firstname', 'lastname'],
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
};
