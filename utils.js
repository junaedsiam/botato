//@ts-check
import { Message } from 'discord.js'
/**
 * 
 * @param {Message} message
 * @returns {string} 
 */
export const prepareReply = (message) => {
  const latency = ((Date.now() - message.createdTimestamp) / 1000).toFixed(2)
  return `Thanks for calling botato!. Latency: ${latency} sec`
}


/**
 * 
 * @param {Message} message
 * @returns {boolean} 
 */
export const isBotMentioned = (message) => {
  const size = message?.mentions?.users?.size
  const users = message?.mentions?.users
  // If size zero that means no mention is in message11
  if (!size) {
    return false
  }
  // If size is greather than one, that means we do not need to interrupt the chat with bot reply
  if (size > 1) {
    return false
  }
  // if the bot is mentioned, mention users map will contain  Discord application id as map
  if (users.has(process.env.DISCORD_APPLICATION_ID || '')) {
    return true
  }
  return false
}