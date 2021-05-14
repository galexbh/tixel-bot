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

bot.start((ctx) => {
  ctx.reply("Hi, I'm TixelBot. In charge of sending rss to the channel https://t.me/TixelChannel.");
  ctx.reply("I'm open source and you can check it out at https://github.com/galexbh/tixel-bot.");
});

bot.help((ctx) => {
  console.log(ctx);
  ctx.reply("ayuda");
});

bot.command('test', (ctx) => {
  rss.getFeed('https://www.muylinux.com/feed/').then(feed => channel.sendMessageToChannel(feed));
})

bot.launch();
