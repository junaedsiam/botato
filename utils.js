//@ts-check
import { PREFIX } from './constant.js'
import { Message } from 'discord.js'
/**
 * 
 * @param {Message} message
 * @returns {string} 
 */
export const prepareReply = (message) => {
  const command = message.content.slice(PREFIX.length)
  const latency = ((Date.now() - message.createdTimestamp) / 1000).toFixed(2)
  return `Thanks for calling botato! Your command is: ${command}. Latency: ${latency} sec`
}