'use strict';

/**
 * my-battery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-battery.my-battery');
