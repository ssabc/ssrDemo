'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';

    const userInfo = await this.app.mysql.get('users', { sex: '1'})

    await ctx.render('home.tpl', { userInfo });
  }
}

module.exports = HomeController;
