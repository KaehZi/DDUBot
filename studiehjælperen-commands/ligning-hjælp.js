import { commands } from '../index.js'
import { MessageEmbed } from 'discord.js'

    export function ligningHjælp(){
        const ligningHelpEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("UNDER UDVIKLING!")
            .setAuthor({ name: 'Studiehjælperen: Udregning af ligninger'})
            .setTimestamp()
        return { embeds: [ligningHelpEmbed] }
        }