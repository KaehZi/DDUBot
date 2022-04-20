import { commands } from '../index.js'
import { MessageEmbed } from 'discord.js'

export function arealTrapez(){
     
    if(isNaN(commands[2]) || 
    isNaN(commands[3]) ||
    isNaN(commands[4]) || 
    (isNaN(commands[2]) && isNaN(commands[3]) && isNaN(commands[4]))){

    const arealTrapezHelpEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("Areal af en trapez")
        .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trapez')
        .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trapez'})
        .addFields(
            { name: 'For at udregne areal af et parallelogram , skriv:', value: "/areal trapez <h> <a1> <a2>"},
            )
        .setTimestamp()

    return { embeds: [arealTrapezHelpEmbed] };
    
    }else{
    
    let arealTrapez = 1/2 * commands[2] * (Number(commands[3]) + Number(commands[4]))

        const arealTrapezEmbed = new MessageEmbed()
            .setColor('#00ff00')
            .setTitle("Areal af en trapez")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trapez')
            .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trapez'})
            .setDescription('Formel: 1/2 * h * (a1 + a2)')
            .addFields(
            { name: 'Areal for en trapez udregnet:', value: "Svar: " + arealTrapez},
            )
            .setTimestamp()
         return { embeds: [arealTrapezEmbed] };
        }
    }
