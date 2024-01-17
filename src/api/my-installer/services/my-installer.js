'use strict';

/**
 * my-installer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-installer.my-installer');
