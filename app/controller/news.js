'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, news';
  }
  async list() {
    const { ctx, app } = this;
    const pageSize = app.config.news.pageSize;
    const page = parseInt(ctx.query.page) || 1;

    // const idList = await ctx.service.hackerNews.getTopStories(page);

    // get itemInfo parallel
    // const newsList = await Promise.all(idList.map(id => ctx.service.hackerNews.getItem(id)));
    await ctx.render('news/index.tpl', { list: [{
      url: '',
      time: '',
      source: '',
      id: '我是id'
    }], page, pageSize });
  }
}

module.exports = NewsController;
