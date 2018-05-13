# egg-upyun

> currently only supports server access Authorization, and then USES the client (android/ios) to get the key to upload.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-upyun.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-upyun
[travis-image]: https://img.shields.io/travis/eggjs/egg-upyun.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-upyun
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-upyun.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-upyun?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-upyun.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-upyun
[snyk-image]: https://snyk.io/test/npm/egg-upyun/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-upyun
[download-image]: https://img.shields.io/npm/dm/egg-upyun.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-upyun

<!--
Description here.
-->

## Install

```bash
$ npm i egg-upyun --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.upyun = {
  enable: true,
  package: 'egg-upyun',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.upyun = {
  name: 'The service name',
  username: 'The operator',
  password: 'Operator password',
  cdnUrl: 'Speed up the domain',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
// {app_root}/XX.js
const paramData = {
        bucket: config.upyun.name, // Upload the space service name.
        expiration: parseInt(new Date().getTime() / 1000 + 60, 10), // The expiration date of the request.
        'allow-file-type': 'jpg,jpeg,png,gif', // The file type
        'content-length-range': '1,1024000',// File size
      };
data = await app.upyun.getPolicyAndAuthorization(paramData);
```

## Introduction

- this is a cloud service solution.
- simplified and patted the cloud API without worrying about memory leaks.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
