const messageModule = require('../index')

  messageModule();

    if(commands[0] === '/ligning' && commands[1] === 'hjælp'){
        const ligningHelpEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("UNDER UDVIKLING!")
            .setAuthor({ name: 'Studiehjælperen: Udregning af ligninger'})
            .setTimestamp()
        msg.reply(
            { embeds: [ligningHelpEmbed] })
        }