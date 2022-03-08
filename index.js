//import "./commands"
//Hello();
// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
require("dotenv").config();

// Create a new client instance
const myIntents = new Intents();
    myIntents.add( Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES )
const client = new Client({ intents: myIntents });
// When the client is ready, run this code
client.login();
client.on('ready', readyDiscord);
function readyDiscord(){
  console.log('Botten er tændt'); 
}
client.on("messageCreate",gotMessage);

//**********************************************************************************************//

function gotMessage(msg){
    //console.log(msg.content);

    let commands = msg.content.split(" ")
    console.log(commands)
    //Test af liv for botten med tre simple kommandoer
    // if(commands[0] === "!hej" && commands[1] === "med" && commands[2] === "dig"){

    //     msg.channel.send("Hej med dig!")

    // } else if(commands[0] === "!hej" && commands[1] === "bot"){

    //    msg.channel.send("Hej *biip boop*!")
    
    // } else if(commands[0] === "!hej"){

    //     msg.channel.send("Hej!")
    
    // }

    // if(commands[0] === "madias" && commands[1] === "er" && commands[2] === "gay"){

    //     msg.channel.send("@madias#0744 er gay")

    // } else if(commands[0] === "!Madias" && commands[1] === "gay"){

    //    msg.channel.send("*FEEEED*!")
    
    // } else if(commands[0] === "!gay"){

    //     msg.channel.send("Lasse er sej")
    
    // }


    //Pythagoras funktion med embed implementeret
    if(commands[0] === "/pythagoras"){
      if(isNaN(commands[1])|| isNaN(commands[2])|| isNaN(commands[1]) && isNaN(commands[2])){
        //let pythagoras = Math.sqrt(commands[1] * commands[1] + commands[2] * commands[2])

        //msg.channel.send("Svar: " + pythagoras);
        //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
        const pythagorasEmbed = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle(commands[0])
          .setURL('https://www.webmatematik.dk/lektioner/matematik-c/trigonometri/retvinklede-trekanter')
          .setAuthor({ name: 'Studiehjælperen: Udregning af Pythagoras'})
          .setDescription('Pythagoras udregning af Lone')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
              { name: 'For at udregne med pythagoras, skriv:', value: "/pythagoras <a> <b>"},
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
          )
          //.addField('Inline field title', 'Some value here', true)
          //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
          .setTimestamp()
          //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        msg.channel.send({ embeds: [pythagorasEmbed] });
      
        }else{
          console.log("noget")

          let pythagoras = Math.sqrt(commands[1] * commands[1] + commands[2] * commands[2])

        //msg.channel.send("Svar: " + pythagoras);
        //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
        const pythagorasEmbed = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle(commands[0])
          .setURL('https://www.webmatematik.dk/lektioner/matematik-c/trigonometri/retvinklede-trekanter')
          .setAuthor({ name: 'Studiehjælperen: Udregning af Pythagoras'})
          .setDescription('Pythagoras udregning af Lone')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
              { name: 'Pythagoras udregnet:', value: "Svar: " + pythagoras},
              //{ name: '\u200B', value: '\u200B' },
              // { name: 'Inline field title', value: 'Some value here', inline: true },
              // { name: 'Inline field title', value: 'Some value here', inline: true },
          )
          //.addField('Inline field title', 'Some value here', true)
          //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
          .setTimestamp()
          //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        msg.channel.send({ embeds: [pythagorasEmbed] });



        }
    }
    //Oversigt over areal funktioner
    if(commands[0] === "/areal" || commands[0] === "/areal" && commands[1] === "hjælp"){
      
      const arealEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle(commands[0])
      .setURL('https://www.webmatematik.dk/lektioner/matematik-c/trigonometri/retvinklede-trekanter')
      .setAuthor({ name: 'Studiehjælperen: Udregning af arealer'})
      .setDescription('Areal udregning af Lone')
      //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .addFields(
          { name: 'For at udregne areal af en firkant, skriv:', value: "/areal firkant <a> <b>"},
        //{ name: '\u200B', value: '\u200B' },
          { name: 'For at udregne areal af en trekant, skriv:', value: '/areal trekant <h> <g>' },
        // { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      //.addField('Inline field title', 'Some value here', true)
      //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
      .setTimestamp()
      //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
      msg.channel.send({ embeds: [arealEmbed] });
      }
    //Areal for en firkant funktion med embed
    if(commands[0] === "/areal" && commands[1] === "firkant"){ 
      if(isNaN(commands[2])|| isNaN(commands[3])|| isNaN(commands[2]) && isNaN(commands[3])){
        //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
        const arealfirkantEmbed = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle(commands[0])
          .setURL('https://www.webmatematik.dk/lektioner/matematik-c/trigonometri/retvinklede-trekanter')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en firkant'})
          .setDescription('Areal udregning af Lone')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
              { name: 'For at udregne areal af en firkant , skriv:', value: "/areal firkant <a> <b>"},
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
          )
          //.addField('Inline field title', 'Some value here', true)
          //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
          .setTimestamp()
          //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        msg.channel.send({ embeds: [arealfirkantEmbed] });
      
        }else{
          console.log("noget")

          let arealFirkant = (commands[2] * commands[3])

        //msg.channel.send("Svar: " + pythagoras);
        //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
        const arealfirkantEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(commands[0])
        .setURL('https://www.webmatematik.dk/lektioner/matematik-c/trigonometri/retvinklede-trekanter')
        .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en firkant'})
        .setDescription('Areal udregning af Lone')
        //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Areal for en firkant udregnet:', value: "Svar: " + arealFirkant},
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        //.addField('Inline field title', 'Some value here', true)
        //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
        .setTimestamp()
        //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        msg.channel.send({ embeds: [arealfirkantEmbed] });



        }
    





    for(let i = 0; i < commands.length; i++){
    console.log(commands[i]);
    }


// Login to Discord with your client's token

  }
}