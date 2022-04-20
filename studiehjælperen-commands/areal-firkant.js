const messageModule = require('../index')

  messageModule();

  if(commands[0] === "/areal" && commands[1] === "firkant"){ 
    if(isNaN(commands[2])|| isNaN(commands[3])|| (isNaN(commands[2]) && isNaN(commands[3]))){
    const arealfirkantHelpEmbed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle("Areal af en firkant")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/rektangel')
          .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en firkant'})
          .setDescription('Formel: l * b')
          .addFields(
              { name: 'For at udregne areal af en firkant , skriv:', value: "/areal firkant <l> <b>"},
          )
          .setTimestamp()

    msg.reply(
      { embeds: [arealfirkantHelpEmbed] });
    
    }else{

        let arealFirkant = (commands[2] * commands[3])

        const arealfirkantEmbed = new MessageEmbed()
              .setColor('#00ff00')
              .setTitle("Areal af en firkant")
              .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/rektangel')
              .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en firkant'})
              .setDescription('Formel: l * b')
              .addFields(
              { name: 'Areal for en firkant udregnet:', value: "Svar: " + arealFirkant},
              )
              .setTimestamp()
              
    msg.reply(
        { embeds: [arealfirkantEmbed] });
    }
}