const messageModule = require('../index')

  messageModule();

  if(commands[0] === '/valuta' && commands[1] === 'hjælp'){
    const valutaHelpEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("UNDER UDVIKLING!")
        .setAuthor({ name: 'Studiehjælperen: Omregning af valuta'})
        .setTimestamp()
     msg.reply(
         { embeds: [valutaHelpEmbed] })  
    }