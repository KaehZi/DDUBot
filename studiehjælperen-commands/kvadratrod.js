import { commands } from '../index.js'
import { MessageEmbed } from 'discord.js'

export function kvadratrodCommand(){   
    if(isNaN(commands[1])){
      const kvadratrodHelpEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("Kvadratrod")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/algebra/kvadratrod')
            .setAuthor({ name: 'Studiehjælperen: Kvadratrod'})
            .setDescription('Kvadratroden af et tal')
            .addFields(
                { name: 'For at tage kvadratroden af et tal, skriv:', value: "/kvadratrod <tal>"},
           
            )
            .setTimestamp()
      return { embeds: [kvadratrodHelpEmbed] };
        
    } else {
      
      let kvadratrod = Math.sqrt(commands[1])

      const kvadratrodEmbed = new MessageEmbed()
            .setColor('#00ff00')
            .setTitle("Kvadratrod")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/algebra/kvadratrod')
            .setAuthor({ name: 'Studiehjælperen: Kvadratrod'})
            .setDescription('Kvadratroden af et tal')
            .addFields(
                { name: 'Kvadraten af et tal:', value: "Svar: " + kvadratrod},
            )
            .setTimestamp()
          return { embeds: [kvadratrodEmbed] };
            }
        }
       

      

      