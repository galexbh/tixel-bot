require('dotenv/config')
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('hola'))

bot.help((ctx =>{
    console.log(ctx)
    ctx.reply('ayuda')
}))

bot.launch()

