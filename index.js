import { Intents, Client } from 'discord.js';

const CHANNEL_ID = '500102969702875156';
const TOKEN = 'replace with token';

process.on('uncaughtException', console.error);

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.on('ready', () => console.log('ready'));
client.on('messageCreate', async (message) => {
  if (message.channelId === CHANNEL_ID) {
    await message.react('👍');
    await message.react('👎');
  }
});

client.login(TOKEN);
