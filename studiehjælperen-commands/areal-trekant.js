const messageModule = require('../index')

  messageModule();

  if(commands[0] === "/areal" && commands[1] === "trekant"){ 
    if(isNaN(commands[2])||
       isNaN(commands[3])|| 
      (isNaN(commands[2]) && isNaN(commands[3]))){
    //pythagorasSlash = SlashCommandBuilder().setName('pythagoras').setDescription('Udregner pythagoras'),
    const arealTrekantHelpEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle("Areal af en trekant")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trekant')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trekant'})
          .setDescription('Formel: 1/2 * h * g')
          //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
              { name: 'For at udregne areal af en trekant , skriv:', value: "/areal trekant <h> <g>"},
          )
          .setTimestamp()

    msg.reply(
        { embeds: [arealTrekantHelpEmbed] });
    
    }else{

        let arealTrekant = (1/2 * commands[2] * commands[3])

        const arealTrekantEmbed = new MessageEmbed()
              .setColor('#00ff00')
              .setTitle("Areal af en trekant")
              .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trekant')
              .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trekant'})
              .setDescription('Formel: 1/2 * h * g')
              //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
              .addFields(
              { name: 'Areal for en trekant udregnet:', value: "Svar: " + arealTrekant},
          )
          .setTimestamp()
    msg.reply(
        { embeds: [arealTrekantEmbed] });
    }
}