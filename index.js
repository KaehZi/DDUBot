// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { MessageEmbed } = require("discord.js");
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

    if(commands[0] === "madias" && commands[1] === "er" && commands[2] === "gay"){

        msg.channel.send("@madias#0744 er gay")

    } else if(commands[0] === "!Madias" && commands[1] === "gay"){

       msg.channel.send("*FEEEED*!")
    
    } else if(commands[0] === "!gay"){

        msg.channel.send("Lasse er gay")
    
    }
    //Pythagoras funktion med embed implementeret
    if(commands[0] === "/pythagoras"){

        let pythagoras = Math.sqrt(commands[1] * commands[1] + commands[2] * commands[2])

        //msg.channel.send("Svar: " + pythagoras);
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(commands[0])
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Studiehjælperen: Udregning af Pythagoras'})
        .setDescription('Pythagoras udregning af Lone')
        //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Pythagoras:', value: "Svar: " + pythagoras },
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        //.addField('Inline field title', 'Some value here', true)
        //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
        .setTimestamp()
        //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        msg.channel.send({ embeds: [exampleEmbed] });

    }

    for(let i = 0; i < commands.length; i++){
    console.log(commands[i]);
    }
}

// Login to Discord with your client's token
client.login();
