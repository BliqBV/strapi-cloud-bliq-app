'use strict';

/**
 * my-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-subscription.my-subscription');
