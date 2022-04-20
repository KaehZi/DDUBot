let commands;

// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
import { kvadratrodCommand } from './studiehjælperen-commands/kvadratrod.js'
import { arealTrapez } from './studiehjælperen-commands/areal-trapez.js';
import { arealCirkel } from './studiehjælperen-commands/areal-cirkel.js';
import { arealFirkant } from './studiehjælperen-commands/areal-firkant.js';
import { arealHjælp } from './studiehjælperen-commands/areal-hjælp.js';

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
    if(commands[0] === "/areal" && commands[1] === "hjælp"){
      msg.reply(arealHjælp());
    }
    if(commands[0] === "/areal" && commands[1] === "trapez"){
      msg.reply(arealTrapez());
    }
    if(commands[0] === "/areal" && commands[1] === "cirkel"){
      msg.reply(arealCirkel());
    }
    if(commands[0] === "/areal" && commands[1] === "firkant"){
      msg.reply(arealFirkant());
    } 
}

export { commands }
