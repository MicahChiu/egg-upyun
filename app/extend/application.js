/*
 * Copyright belongs to Shangming Zhao(Micah Chiu) all.
 */
'use strict';

const upyun = require('upyun');
const init = require('../../lib/init');

const YOUPAI = Symbol('Application#upyun');

module.exports = {
  get upyun() {
    const service = init(this);
    this[YOUPAI] = {};
    this[YOUPAI].getPolicyAndAuthorization = paramData => upyun.sign.getPolicyAndAuthorization(service, paramData);
    return this[YOUPAI];
  },
};
