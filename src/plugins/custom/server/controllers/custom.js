'use strict';

module.exports = {
  findContentTypes(ctx) {
    ctx.body = strapi.plugin('custom').service('custom').getContentTypes();
  },
};
