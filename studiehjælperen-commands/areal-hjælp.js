//import { commands } from '../index.js'
import { MessageEmbed } from 'discord.js'

  //Oversigt over areal funktioner
  export function arealHjælp(){
    
  const arealHelpEmbed = new MessageEmbed()
        .setColor('#ffff00')
        .setTitle("Areal beregning")
        .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal')
        .setAuthor({ name: 'Studiehjælperen: Udregning af arealer'})
        .setDescription('Areal udregning af Studiehjælperen')
        .addFields(
            { name: 'For at udregne areal af en firkant, skriv:', value: "/areal firkant <l> <b>"},
            { name: 'For at udregne areal af en trekant, skriv:', value: '/areal trekant <h> <g>' },
            { name: 'For at udregne areal af et paralellogram, skriv:', value: '/areal parallelogram <h> <g>' },
            { name: 'For at udregne areal af en cirkel, skriv:', value: "/areal cirkel <r>" },
            { name: 'For at udregne areal af en trapez, skriv:', value: "/areal trapez <h> <a1> <a2>" },
        )
        .setTimestamp()
  return { embeds: [arealHelpEmbed] };
  }