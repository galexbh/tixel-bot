const {Telegraf} = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

const chatId = process.env.CHANNEL_ID;

/**
 * @param {string} msg
 *
 */
const sendMessageToChannel = (msg) => {
  bot.telegram.sendMessage(chatId, msg);
}

module.exports = {sendMessageToChannel}
