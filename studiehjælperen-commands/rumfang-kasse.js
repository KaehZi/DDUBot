import { commands } from '../index.js'
import { MessageEmbed } from 'discord.js'

  export function rumfangKasse(){
    if(isNaN(commands[2]) || 
       isNaN(commands[3]) ||
       isNaN(commands[4]) || 
      (isNaN(commands[2]) && isNaN(commands[3]) && isNaN(commands[4]))){

    const rumfangKasseHelpEmbed = new MessageEmbed()
        .setColor('ff0000')
        .setTitle("Rumfang af en kasse")
        .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/kasse')
        .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en kasse'})
        .setDescription('Rumfangs beregning af Studiehjælperen')
        .addFields(
            { name: 'For at udregne rumfang af en firkant/kasse, skriv:', value: "/rumfang firkant <l> <b> <h>"},    
        )
        .setTimestamp()
    return { embeds: [rumfangKasseHelpEmbed]};

}else{

    let rumfangKasse = (commands[2] * commands[3] * commands[4])

    const rumfangKasseEmbed = new MessageEmbed()
        .setColor('00ff00')
        .setTitle("Rumfang af en kasse")
        .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/kasse')
        .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en kasse'})
        .setDescription('Formel: l * h * h')
        .addFields(
            { name: 'Rumfanget af en kasse: ', value: "Svar: " + rumfangKasse},    
        )
        .setTimestamp()
    return { embeds: [rumfangKasseEmbed]};
    }
}