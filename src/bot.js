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
const channel = require("./channel")

bot.start((ctx) => ctx.reply("hola"));

bot.help((ctx) => {
  console.log(ctx);
  ctx.reply("ayuda");
});

bot.command('test', (ctx) => {
  rss.getFeed('https://www.muylinux.com/feed/').then(feed => channel.sendMessageToChannel(feed));
})

bot.launch();
