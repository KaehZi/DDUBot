import { MessageEmbed } from 'discord.js'

  export function valutaHjælp(){
    const valutaHelpEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("UNDER UDVIKLING!")
        .setAuthor({ name: 'Studiehjælperen: Omregning af valuta'})
        .setTimestamp()
     return { embeds: [valutaHelpEmbed] };  
    }