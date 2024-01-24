'use strict';

/**
 * my-smart-meter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-smart-meter.my-smart-meter');
