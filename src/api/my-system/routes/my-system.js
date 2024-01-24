'use strict';

/**
 * my-system router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::my-system.my-system');
