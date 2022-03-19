//import { gotMessage } from "./index";

const gotMessage = require("./index.js");

gotMessage();

if(commands[0] === "/pythagoras"){
    if(isNaN(commands[1])|| 
    isNaN(commands[2])|| 
    isNaN(commands[1]) && isNaN(commands[2])){
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

      msg.channel.send(
          { embeds: [pythagorasHelpEmbed] });
    
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