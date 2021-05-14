const {Telegraf} = require("telegraf");

const chatId = process.env.CHANNEL_ID;

/**
 * @param {Telegraf} bot {string} msg
 *
 */
const sendMessageToChannel = (bot, msg) => {
  bot.telegram.sendMessage(chatId, msg);
}

module.exports = {sendMessageToChannel}
