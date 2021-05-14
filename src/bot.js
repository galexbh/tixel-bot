/**
 * @see https://www.npmjs.com/package/dotenv
 */
require("dotenv").config();

/**
 * @see https://telegraf.js.org/#/
 */
const {Telegraf} = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

const rss = require("./rssFeed");
const channel = require("./channel");
const cron = require("./cron")

bot.start((ctx) => {
  ctx.reply("Hi, I'm TixelBot. In charge of sending rss to the channel https://t.me/TixelChannel.");
  ctx.reply("I'm open source and you can check it out at https://github.com/galexbh/tixel-bot.");
});

bot.help((ctx) => {
  /*console.log(ctx);*/
  ctx.reply(`
  test the source
  /test {url}
  `);
  cron.initCron(bot);
});

bot.command('test', (ctx) => {
  try {
    rss.getFeed(ctx.message.text.slice(6)).
      then(feed => ctx.reply(feed));
  } catch (error) {
    throw error;
  }
})

bot.launch();
