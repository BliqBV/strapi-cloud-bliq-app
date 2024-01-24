'use strict';

/**
 * my-invoices service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-invoices.my-invoices');
