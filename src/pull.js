const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const CH_ID = '1237200781652922481';
const CALOT = '706183309943767112';

client.on('ready', async () => {
  console.log('Login successful!');
  const channel = await client.channels.fetch(CH_ID);

  if (!channel) {
    console.error('Channel not found!');
    return;
  }

  const pull = async () => {
    try {
      await channel.sendSlash(CALOT, 'pull');
      console.log('Working!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  for (let i = 4; i >= 0; i--) {
    await pull();
  }
});

client.login(process.env.TOKEN);

