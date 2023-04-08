import { Message } from 'discord.js';
import { findBotName } from './utils.js';
import { getGithubIssues } from './github.js';

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
    if (content.indexOf('github:') === -1) {
      return false;
    }
    return true;
  }

  getIssueName() {
    return this.message.content.split('github:')?.slice(-1)?.[0] || '';
  }

  getDefaultMessage() {
    const botName = findBotName(this.message);
    return `Hello there! I am your issue solver bot ${botName}. Currently I can help you searching through github issues.\nBut you have to write the message in a certain format.\nExample: **${botName} github: Maximum call stack size reached**`;
  }

  static getFormattedIssues(issues) {
    let message = '';
    issues.forEach((issue) => {
      message += `Title: ${issue.title}\nLink: ${issue.html_url}\n\n`;
    });
    return message;
  }

  async reply() {
    if (!this.isValidFormat()) {
      return this.message.reply(this.getDefaultMessage());
    }
    const issueName = this.getIssueName();
    if (!issueName) {
      return this.message.reply(this.getDefaultMessage());
    }
    const loadingMessage = await this.message.channel.send(
      'loading relevant issues....'
    );
    const issues = await getGithubIssues(issueName);

    if (!issues || !issues.length) {
      return loadingMessage.edit(
        'Sorry, I am not able to find any issue for you'
      );
    }
    return loadingMessage.edit(ReplyEngine.getFormattedIssues(issues));
  }
}
