const messageModule = require('../index')

  messageModule();

  if(commands[0] === "/pythagoras"){
    if(isNaN(commands[1])|| 
       isNaN(commands[2])|| 
       isNaN(commands[1]) && isNaN(commands[2])){
      const pythagorasHelpEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("Pythagoras")
        .setURL('https://www.webmatematik.dk/lektioner/matematik-c/trigonometri/retvinklede-trekanter')
        .setAuthor({ name: 'Studiehjælperen: Udregning af Pythagoras'})
        .setDescription('Pythagoras udregning af Studiehjælperen')
        //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'For at udregne med pythagoras, skriv:', value: "/pythagoras <a> <b>"},
        )
        .setTimestamp()

      msg.reply(
          { embeds: [pythagorasHelpEmbed] });
    
      }else{
        //console.log("noget")

        let pythagoras = Math.sqrt(commands[1] * commands[1] + commands[2] * commands[2])

      const pythagorasEmbed = new MessageEmbed()
        .setColor('#00ff00')
        .setTitle("Pythagoras")
        .setURL('https://www.webmatematik.dk/lektioner/matematik-c/trigonometri/retvinklede-trekanter')
        .setAuthor({ name: 'Studiehjælperen: Udregning af Pythagoras'})
        .setDescription('Pythagoras udregning af Studiehjælperen')
        //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Pythagoras udregnet:', value: "Svar: " + pythagoras},
          )
        .setTimestamp()

      msg.reply(
        { embeds: [pythagorasEmbed] });
      }
  }
