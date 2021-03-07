/**
 * @see https://www.npmjs.com/package/dotenv
 */
require("dotenv").config();

/**
 * @see https://telegraf.js.org/#/
 */
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

/**
 * @see https://www.npmjs.com/package/rss-parser
 */
const Parser = require("rss-parser");
const parser = new Parser();

bot.start((ctx) => ctx.reply("hola"));

bot.help((ctx) => {
  console.log(ctx);
  ctx.reply("ayuda");
});

async function rssfeed() {
  try {
    const { items } = await parser.parseURL("https://www.muylinux.com/feed/");
    const [{ title, link }] = items;
    const lastArticule = `${title}\n${link}`;
  } catch (error) {
    console.log(error);
  }
}

bot.launch();
