'use strict';

module.exports = {
  async findById(ctx) {
    const {
      id
    } = ctx.params;

    const entry = await strapi.entityService.findOne('api::travel-package.travel-package', id, {
      fields: ['name', 'description'],
      populate: {
        files: {
          fields: ['name', 'url', 'mime', 'ext', 'formats'],
        },
      }
    });
    return entry;
  },
  async findAll(ctx) {

    const entry = await strapi.entityService.findMany('api::travel-package.travel-package', {
      fields: ['name', 'description'],
      populate: {
        files: true
      },
      sort: { id: 'desc' },
    });
    return entry;
  },
}
