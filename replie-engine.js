import { Message } from 'discord.js';
import { findBotName } from './utils.js';

export class ReplyEngine {
  /**
   *
   * @param {Message} message
   */
  constructor(message) {
    this.message = message;
  }

  isValidFormat() {
    let content = this.message.content.split(' ');
    if (content.length === 1) {
      return false;
    }
    const [, ...rest] = content;
    content = rest.join(' ');
    console.log(content);
    console.log(content.indexOf('github:'));
    if (content.indexOf('github:') === -1) {
      return false;
    }
    return true;
  }

  getDefaultMessage() {
    const botName = findBotName(this.message);
    return `Hello there! I am your issue solver bot ${botName}. Currently I can help you searching through github issues.\nBut you have to write the message in a certain format.\nExample: **${botName} github: Maximum call stack size reached**`;
  }

  async reply() {
    if (!this.isValidFormat()) {
      return this.message.reply(this.getDefaultMessage());
    }
    return this.message.reply('Your message is valid');
  }
}
