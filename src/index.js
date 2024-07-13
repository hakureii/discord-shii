const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const CH_ID = '1237200781652922481';
const camelot = '706183309943767112';

client.on('ready', async () => {
  console.log('Login successful!');
  const channel = await client.channels.fetch(CH_ID);

  if (!channel) {
    console.error('Channel not found!');
    return;
  }

  const pull = async () => {
    try {
      await channel.sendSlash(camelot, 'pull');
      console.log('Working!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  for (let i = 5; i > 0; i--) {
    await pull();
  }

  setInterval(pull, (45 * 60000));
});

client.login(process.env.TOKEN);

