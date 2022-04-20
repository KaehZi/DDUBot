import { commands } from '../index.js'
import { MessageEmbed } from 'discord.js'

  export function pythagoras(){
    if(isNaN(commands[1])|| 
       isNaN(commands[2])|| 
       isNaN(commands[1]) && isNaN(commands[2])){
      const pythagorasHelpEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("Pythagoras")
        .setURL('https://www.webmatematik.dk/lektioner/matematik-c/trigonometri/retvinklede-trekanter')
        .setAuthor({ name: 'Studiehjælperen: Udregning af Pythagoras'})
        .setDescription('Pythagoras udregning af Studiehjælperen')
        //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'For at udregne med pythagoras, skriv:', value: "/pythagoras <a> <b>"},
        )
        .setTimestamp()

      return { embeds: [pythagorasHelpEmbed] };
    
      }else{

        let pythagoras = Math.sqrt(commands[1] * commands[1] + commands[2] * commands[2])

      const pythagorasEmbed = new MessageEmbed()
        .setColor('#00ff00')
        .setTitle("Pythagoras")
        .setURL('https://www.webmatematik.dk/lektioner/matematik-c/trigonometri/retvinklede-trekanter')
        .setAuthor({ name: 'Studiehjælperen: Udregning af Pythagoras'})
        .setDescription('Pythagoras udregning af Studiehjælperen')
        //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Pythagoras udregnet:', value: "Svar: " + pythagoras},
          )
        .setTimestamp()

      return { embeds: [pythagorasEmbed] };
      }
  }
