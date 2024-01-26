'use strict';

/**
 * my-charging-station service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-charging-station.my-charging-station');
