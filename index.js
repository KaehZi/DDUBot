import { kvadratrodCommand } from './studiehjælperen-commands/kvadratrod.js'
let commands;

// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
//const WolframAlphaAPI = require('wolfram-alpha-api');
//const wolframAPI = WolframAlphaAPI("774UYL-GLW5P969T4");

// Create a new client instance
const myIntents = new Intents();
    myIntents.add( Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES )
const client = new Client({ intents: myIntents });

// When the client is ready, run this code
client.login(process.env.DISCORD_TOKEN);
client.on('ready', readyDiscord);
function readyDiscord(){
  console.log('[INFO] Studiehjælperen er online.'); 
}
client.on("messageCreate", gotMessage);
//**********************************************************************************************//
function gotMessage(msg){
    console.log(msg.content);
    commands = msg.content.split(" ")
    console.log(commands)

    if(commands[0] === "/kvadratrod"){
      msg.reply(kvadratrodCommand());
    }
    



}

export { commands }
