const messageModule = require('../index')

  messageModule();

  if(commands[0] === "/rumfang" && commands[1] === "cylinder"){ 
    if(isNaN(commands[2]) || 
       isNaN(commands[3]) || 
      (isNaN(commands[2]) && isNaN(commands[3]))){

        const rumfangCylinderHelpEmbed = new MessageEmbed()
          .setColor('ff0000')
          .setTitle("Rumfang af en cylinder")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/cylinder')
          .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en cylinder'})
          .setDescription('Rumfangs beregning af Studiehjælperen')
          .addFields(
              { name: 'For at udregne rumfang af en cylinder, skriv:', value: "/rumfang cylinder <h> <r>"},    
          )
          .setTimestamp()
      msg.reply(
        { embeds: [rumfangCylinderHelpEmbed]});

      }else{

        let rumfangCylinder = Math.PI * commands[2] * (commands[3])^2

        const rumfangCylinderEmbed = new MessageEmbed()
          .setColor('00ff00')
          .setTitle("Rumfang af en cylinder")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/cylinder')
          .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en cylinder'})
          .setDescription('Formel: pi * h * r^2')
          .addFields(
              { name: 'Rumfanget af en cylinder: ', value: "Svar: " + rumfangCylinder},    
          )
          .setTimestamp()
      msg.reply(
        { embeds: [rumfangCylinderEmbed]});
      }
    }