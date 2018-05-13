# egg-upyun

> 目前仅支持服务端获取Authorization,然后使用客户端(android/ios)拿到密钥去上传。

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

## 开启插件

```js
// config/plugin.js
exports.upyun = {
  enable: true,
  package: 'egg-upyun',
};
```

## 配置

```js
// {app_root}/config/config.default.js
exports.upyun = {
  name: '服务名称',
  username: '操作员',
  password: '操作员密码',
  cdnUrl: '加速域名',
};
```
## 例子

```js
// {app_root}/XX.js
const paramData = {
        bucket: config.upyun.name, // 上传空间服务名称
        expiration: parseInt(new Date().getTime() / 1000 + 60, 10), // 请求的过期时间
        'allow-file-type': 'jpg,jpeg,png,gif', // 文件类型
        'content-length-range': '1,1024000',// 文件范围大小
      };
data = await app.upyun.getPolicyAndAuthorization(paramData);
```

## 使用场景

- 这是一个又拍云服务端解决方案。
- 简化了又拍云API并且不用担心内存溢出。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
