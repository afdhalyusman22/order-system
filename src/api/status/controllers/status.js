'use strict';

/**
 *  status controller
 */

const {
  createCoreController
} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::status.status', ({
  strapi
}) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findMany('api::status.status', {
      fields: ['name']
    });
    return entity;
  }
}));
