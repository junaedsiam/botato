// @ts-check
import './env.js';
import { isBotMentioned } from './utils.js';
import { client } from './client.js';
import { ReplyEngine } from './replie-engine.js';

client.login(process.env.BOT_TOKEN);

client.on('messageCreate', async (message) => {
  if (message.author.bot) {
    return;
  }
  if (isBotMentioned(message)) {
    const engine = new ReplyEngine(message);
    engine.reply();
  }
});
