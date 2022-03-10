
// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
require("dotenv").config();


//Der kommer en fejl med at det ikke er den rigtige pakke der bliver åbnet når SlashCommandBuilder bliver executed
//const pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras')
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

//Opbygning af SlashCommands med SlashCommandBuilder

// const pythagorasSlash = SlashCommandBuilder()
//   .setName('pythagoras')
//   .setDescription('Udregner pythagoras')



function gotMessage(msg){
    //console.log(msg.content);

    let commands = msg.content.split(" ")
    console.log(commands)

    //Pythagoras funktion med embed implementeret
    if(commands[0] === "/pythagoras"){
      if(isNaN(commands[1])|| isNaN(commands[2])|| isNaN(commands[1]) && isNaN(commands[2])){
        //let pythagoras = Math.sqrt(commands[1] * commands[1] + commands[2] * commands[2])
        //msg.channel.send("Svar: " + pythagoras);
        //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
        const pythagorasHelpEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle("Pythagoras")
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

        msg.channel.send({ embeds: [pythagorasHelpEmbed] });
      
        }else{
          //console.log("noget")

          let pythagoras = Math.sqrt(commands[1] * commands[1] + commands[2] * commands[2])

        
        //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras')
        const pythagorasEmbed = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle("Pythagoras")
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
    if(commands[0] === "/areal" && commands[1] === "" || (commands[0] === "/areal" && commands[1] === "hjælp")){
      
      const arealHelpEmbed = new MessageEmbed()
      .setColor('#ffff00')
      .setTitle("Areal beregning")
      .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal')
      .setAuthor({ name: 'Studiehjælperen: Udregning af arealer'})
      .setDescription('Areal udregning af Lone')
      //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .addFields(
          { name: 'For at udregne areal af en firkant, skriv:', value: "/areal firkant <l> <b>"},
          { name: 'For at udregne areal af en trekant, skriv:', value: '/areal trekant <h> <g>' },
          { name: 'For at udregne areal af et paralellogram, skriv:', value: '/areal parallelogram <h> <g>' },
          { name: 'For at udregne areal af en cirkel, skriv:', value: "/areal cirkel <r>" },
          { name: 'For at udregne areal af en trapez, skriv:', value: "/areal trapez <h> <a1> <a2>" },
        )
      //.addField('Inline field title', 'Some value here', true)
      //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
      .setTimestamp()
      //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
      msg.channel.send({ embeds: [arealHelpEmbed] });
      }
      
    //Areal for en firkant funktion med embed
    if(commands[0] === "/areal" && commands[1] === "firkant"){ 
      if(isNaN(commands[2])|| isNaN(commands[3])|| (isNaN(commands[2]) && isNaN(commands[3]))){
        //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
        const arealfirkantHelpEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle("Areal af en firkant")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/rektangel')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en firkant'})
          .setDescription('Formel: l * b')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
              { name: 'For at udregne areal af en firkant , skriv:', value: "/areal firkant <l> <b>"},
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
          )
          //.addField('Inline field title', 'Some value here', true)
          //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
          .setTimestamp()
          //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        msg.channel.send({ embeds: [arealfirkantHelpEmbed] });
      
        }else{
          //console.log("else bliver executed")

          let arealFirkant = (commands[2] * commands[3])

          const arealfirkantEmbed = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle("Areal af en firkant")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/rektangel')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en firkant'})
          .setDescription('Formel: l * b')
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
        //msg.channel.send("Første besked");
        msg.channel.send({ embeds: [arealfirkantEmbed] });
        }
      }

    //Areal for en trekant funktion med embed
    if(commands[0] === "/areal" && commands[1] === "trekant"){ 
      if(isNaN(commands[2])|| isNaN(commands[3])|| (isNaN(commands[2]) && isNaN(commands[3]))){
        //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
        const arealTrekantHelpEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle("Areal af en trekant")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trekant')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trekant'})
          .setDescription('Formel: 1/2 * h * g')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
              { name: 'For at udregne areal af en trekant , skriv:', value: "/areal trekant <h> <g>"},
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
          )
          //.addField('Inline field title', 'Some value here', true)
          //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
          .setTimestamp()
          //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        msg.channel.send({ embeds: [arealTrekantHelpEmbed] });
      
        }else{
          //console.log("else bliver executed")

          let arealTrekant = (1/2 * commands[2] * commands[3])

          const arealTrekantEmbed = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle("Areal af en trekant")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trekant')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trekant'})
          .setDescription('Formel: 1/2 * h * g')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
          { name: 'Areal for en trekant udregnet:', value: "Svar: " + arealTrekant},
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        //.addField('Inline field title', 'Some value here', true)
        //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
        .setTimestamp()
        //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        //msg.channel.send("Første besked");
        msg.channel.send({ embeds: [arealTrekantEmbed] });
        }
  }
  if(commands[0] === "/areal" && commands[1] === "cirkel"){ 
    if(isNaN(commands[2])){
      //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
      const arealCirkelHelpEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("Areal af en cirkel")
        .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/rektangel')
        .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en cirkel'})
        .setDescription('Formel: pi * r')
        //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'For at udregne areal af en cirkel , skriv:', value: "/areal cirkel <r>"},
          //{ name: '\u200B', value: '\u200B' },
          // { name: 'Inline field title', value: 'Some value here', inline: true },
          // { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        //.addField('Inline field title', 'Some value here', true)
        //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
        .setTimestamp()
        //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

      msg.channel.send({ embeds: [arealCirkelHelpEmbed] });
    
      }else{
        //console.log("else bliver executed")

        let arealCirkel = (Math.PI * (commands[2]))

        const arealCirkelEmbed = new MessageEmbed()
        .setColor('#00ff00')
        .setTitle("Areal af en cirkel")
        .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/rektangel')
        .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en cirkel'})
        .setDescription('Formel: pi * r')
        //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
         { name: 'Areal for en cirkel udregnet:', value: "Svar: " + arealCirkel},
          //{ name: '\u200B', value: '\u200B' },
          // { name: 'Inline field title', value: 'Some value here', inline: true },
          // { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      //.addField('Inline field title', 'Some value here', true)
      //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
      .setTimestamp()
      //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
      //msg.channel.send("Første besked");
      msg.channel.send({ embeds: [arealCirkelEmbed] });
      }
    }

    //Areal af parallelogram
    if(commands[0] === "/areal" && commands[1] === "parallelogram" || commands[0] === "areal" && commands[1] === "parallel"){ 
      if(isNaN(commands[2])|| isNaN(commands[3])|| (isNaN(commands[2]) && isNaN(commands[3]))){
        //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
        const arealParallelHelpEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle("Areal af et parallelogram")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/parallellogram')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for et parallelogram'})
          .setDescription('Formel: h * g')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
              { name: 'For at udregne areal af et parallelogram , skriv:', value: "/areal parallelogram <h> <g>"},
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
          )
          //.addField('Inline field title', 'Some value here', true)
          //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
          .setTimestamp()
          //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        msg.channel.send({ embeds: [arealParallelHelpEmbed] });
      
        }else{
          //console.log("else bliver executed")

          let arealParallel = (commands[2] * commands[3])

          const arealParallelEmbed = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle("Areal af en trapez")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/parallellogram')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for et parallelogram'})
          .setDescription('Formel: h * g')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
          { name: 'Areal for et paralellogram udregnet:', value: "Svar: " + arealParallel},
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        //.addField('Inline field title', 'Some value here', true)
        //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
        .setTimestamp()
        //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        //msg.channel.send("Første besked");
        msg.channel.send({ embeds: [arealParallelEmbed] });
        }
  }


    //Areal af parallelogram
    if(commands[0] === "/areal" && commands[1] === "trapez"){ 
      if(isNaN(commands[2]) || isNaN(commands[3]) || isNaN(commands[4]) || (isNaN(commands[2]) && isNaN(commands[3]) && isNaN(commands[4]))){
        //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
        const arealTrapezHelpEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle("Areal af en trapez")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trapez')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trapez'})
          .setDescription('Formel: 1/2 * h * (a1 + a2)')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
              { name: 'For at udregne areal af et parallelogram , skriv:', value: "/areal trapez <h> <a1> <a2>"},
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
          )
          //.addField('Inline field title', 'Some value here', true)
          //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
          .setTimestamp()
          //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        msg.channel.send({ embeds: [arealTrapezHelpEmbed] });
      
        }else{
          //console.log("else bliver executed")

          let arealTrapez = (1/2 * commands[2] * (commands[3] + commands[4]))

          const arealTrapezEmbed = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle("Areal af en trapez")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trapez')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trapez'})
          .setDescription('Formel: 1/2 * h * (a1 + a2)')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
          { name: 'Areal for en trapez udregnet:', value: "Svar: " + arealTrapez},
            //{ name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        //.addField('Inline field title', 'Some value here', true)
        //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
        .setTimestamp()
        //.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        //msg.channel.send("Første besked");
        msg.channel.send({ embeds: [arealTrapezEmbed] });
        }
  }
    for(let i = 0; i < commands.length; i++){
    console.log(commands[i]);
    }






    for(let i = 0; i < commands.length; i++){
    console.log(commands[i]);
    }

    




// Login to Discord with your client's token

 
}