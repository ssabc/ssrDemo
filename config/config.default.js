/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575441250892_4520';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.news = {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  // 渲染模板
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.nj': 'nunjucks',
    },
  };

  config.mysql = {
    client: {
      // ip地址
      host: 'localhost',
      // 端口
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'zs19921009',
      // 数据库名
      database: 'test',
    },
    app: true,
    agent: false
  }

  return {
    ...config,
    ...userConfig,
  };
};
