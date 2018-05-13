/*
 * Copyright belongs to Shangming Zhao(Micah Chiu) all.
 */
'use strict';

const upyun = require('upyun');

module.exports = app => {
  const { config } = app;
  return new upyun.Service(config.upyun.name, config.upyun.username, config.upyun.password);
};
