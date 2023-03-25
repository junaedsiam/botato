// @ts-check
import './env.js'
import Discord from 'discord.js'
import { prepareReply, isBotMentioned } from './utils.js'

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
  // console.log('message', message)
  // console.log('mention', message.mentions.users)
  if(message.author.bot) {
    return 
  }
  if (isBotMentioned(message)) {
    message.reply('Thanks for calling me man!')
  }

  // message.reply(prepareReply(message))
  /**
   * Have to mention the bot, that you have!
   */
})