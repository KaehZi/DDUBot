let commands;

// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
import { kvadratrodCommand } from './studiehjælperen-commands/kvadratrod.js'
import { arealTrapez } from './studiehjælperen-commands/areal-trapez.js';
import { arealCirkel } from './studiehjælperen-commands/areal-cirkel.js';
import { arealFirkant } from './studiehjælperen-commands/areal-firkant.js';
import { arealHjælp } from './studiehjælperen-commands/areal-hjælp.js';
import { arealParallel } from './studiehjælperen-commands/areal-parallelogram.js';
import { arealTrekant } from './studiehjælperen-commands/areal-trekant.js';
import { hjælpOversigt } from './studiehjælperen-commands/hjælp-oversigt.js';
import { ligningBeregner } from './studiehjælperen-commands/ligning-beregner.js';
import { ligningHjælp } from './studiehjælperen-commands/ligning-hjælp.js';
import { pythagoras } from './studiehjælperen-commands/pythagoras.js';
import { arealCylinder } from './studiehjælperen-commands/rumfang-cylinder.js';
import { rumfangHjælp } from './studiehjælperen-commands/rumfang-hjælp.js';
import { rumfangKasse } from './studiehjælperen-commands/rumfang-kasse.js';
import { rumfangKugle } from './studiehjælperen-commands/rumfang-kugle.js';
import { rumfangKegle } from './studiehjælperen-commands/rumfang-kegle.js';
import { rumfangPrisme } from './studiehjælperen-commands/rumfang-prisme.js';
import { rumfangPyramide } from './studiehjælperen-commands/rumfang-pyramide.js';
import { valutaHjælp } from './studiehjælperen-commands/valuta-hjælp.js';
import { valutaOmregner } from './studiehjælperen-commands/valuta-omregner.js';

dotenv.config()
//const WolframAlphaAPI = require('wolfram-alpha-api');
const wolframAPI = WolframAlphaAPI(String(process.env.WOLFRAMALPHA_KEY));

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
    if(commands[0] === "/areal" && commands[1] === "parallelogram" 
  ||   commands[0] === "areal" && commands[1] === "parallel"){
      msg.reply(arealParallel());
    }
    if(commands[0] === "/areal" && commands[1] === "trekant"){
      msg.reply(arealTrekant());
    }
    if(commands[0] === "/hjælp"){
      msg.reply(hjælpOversigt());
    }
    if(commands[0] === "/ligning" && commands[1] === "beregning"){
      msg.reply(ligningBeregner());
    }
    if(commands[0] === '/ligning' && commands[1] === 'hjælp'){
      msg.reply(ligningHjælp());
    }
    if(commands[0] === "/pythagoras"){
      msg.reply(pythagoras());
    }
    if(commands[0] === "/rumfang" && commands[1] === "cylinder"){ 
      msg.reply(arealCylinder());
    }
    if(commands[0] === "/rumfang" && commands[1] === "hjælp"){
      msg.reply(rumfangHjælp());
    }
    if(commands[0] === "/rumfang" && commands[1] === "kasse"){
      msg.reply(rumfangKasse());
    }
    if(commands[0] === "/rumfang" && commands[1] === "kegle"){
      msg.reply(rumfangKegle());
    }
    if(commands[0] === "/rumfang" && commands[1] === "kugle"){
      msg.reply(rumfangKugle());
    }
    if(commands[0] === "/rumfang" && commands[1] === "prisme"){
      msg.reply(rumfangPrisme());
    }
    if(commands[0] === "/rumfang" && commands[1] === "pyramide"){
      msg.reply(rumfangPyramide());
    }
    if(commands[0] === '/valuta' && commands[1] === 'hjælp'){
      msg.reply(valutaHjælp());
    }
    if(commands[0] === "/valuta" && commands[1] === "omregn"){
      msg.reply(valutaOmregner());
    }

}

export { commands }
