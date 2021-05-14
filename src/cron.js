const cron = require('node-cron');
const rss = require("./rssFeed");
const channel = require("./channel");

const initCron = (bot) => {
  cron.schedule('* */3 * * *', () => {
    try {
      rss.getFeed('http://feeds.weblogssl.com/genbeta').
        then(feed => channel.sendMessageToChannel(bot, feed));
    } catch (error) {
      throw error;
    }
  })
}

module.exports = {initCron}
