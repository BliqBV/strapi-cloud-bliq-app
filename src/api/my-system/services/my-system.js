'use strict';

/**
 * my-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-system.my-system');
