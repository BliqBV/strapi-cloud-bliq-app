'use strict';

/**
 * my-bliq service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-bliq.my-bliq');
