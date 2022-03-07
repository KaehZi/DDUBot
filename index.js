// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
//const { token } = require("./config.json");
require("dotenv").config();

// Create a new client instance

const myIntents = new Intents();
    myIntents.add( Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES )
const client = new Client({ intents: myIntents });
// When the client is ready, run this code
client.on('ready', readyDiscord);

function readyDiscord(){
  console.log('Discord is ready'); 
  
}
client.on("messageCreate",gotMessage);

function gotMessage(msg){
    //console.log(msg.content);

    let commands = msg.content.split(" ")
    console.log(commands)
    //Test af liv for botten med tre simple kommandoer
    if(commands[0] === "!hej" && commands[1] === "med" && commands[2] === "dig"){

        msg.channel.send("Hej med dig!")

    } else if(commands[0] === "!hej" && commands[1] === "bot"){

       msg.channel.send("Hej *biip boop*!")
    
    } else if(commands[0] === "!hej"){

        msg.channel.send("Hej!")
    
    }





    for(let i = 0; i < commands.length; i++){
    console.log(commands[i]);
    }
}

// Login to Discord with your client's token
client.login();
