const messageModule = require('../index')

  messageModule();

if(commands[0] === '/musik' && commands[1] === 'hjælp'){
    const musikHelpEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("UNDER UDVIKLING!")
        .setAuthor({ name: 'Studiehjælperen: Afspilning af musik eller andet lyd'})
        .setTimestamp()
    msg.reply(
        { embeds: [musikHelpEmbed] })  
    }