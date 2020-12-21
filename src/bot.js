require('dotenv/config')

/**
 * @see https://telegraf.js.org/#/
 */
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('hola'))

bot.help((ctx =>{
    console.log(ctx)
    ctx.reply('ayuda')
}))

bot.launch()

