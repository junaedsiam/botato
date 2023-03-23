// @ts-check
import './env.js'
import Discord from 'discord.js'
import { prepareReply } from './utils.js'
import { PREFIX } from './constant.js'
import { getChukNorrisJoke } from './replies/index.js'

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
  partials: [Discord.Partials.Channel]})

client.login(process.env.BOT_TOKEN)

client.on('messageCreate', async (message) => {
  if(message.author.bot) {
    return 
  }
  if(!message.content.startsWith(PREFIX)) {
    return 
  }
  if(message.content.indexOf('joke')!==-1) {
    const joke = await getChukNorrisJoke()
    message.reply(joke)
    return
  }
  if(message.content.indexOf('name')!==-1) {
    message.reply('My name is botato! Like potato, but bot!')
    return
  }
  message.reply(prepareReply(message))
})