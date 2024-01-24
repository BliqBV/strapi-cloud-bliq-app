'use strict';

/**
 * my-system controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::my-system.my-system');
