// @ts-check
import './env.js';
import Discord from 'discord.js';
import { isBotMentioned, findBotName } from './utils.js';

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
  partials: [Discord.Partials.Channel],
});

client.login(process.env.BOT_TOKEN);

client.on('messageCreate', async (message) => {
  if (message.author.bot) {
    return;
  }
  if (isBotMentioned(message)) {
    const botName = findBotName(message);
    console.log(botName);
    // TODO: Use bot name dynamically! Store and serve message from some other file or directory structure
    message.reply(
      '**Welcome from botato**\n If you are lost, Here are couple of functions that I provide currently\n1. Search through github issues\n2. Search through stack overflow(not available yet)\nIn order to use any of the feature just write your search like ```@Botato 1 how to deep clone JS object```'
    );
  }
});
