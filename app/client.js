import Discord from 'discord.js';

export const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
  partials: [Discord.Partials.Channel],
});
