const messageModule = require('../index')

  messageModule();

  if(commands[0] === "/rumfang" && commands[1] === "kegle"){ 
    if(isNaN(commands[2]) && isNaN(commands[3]) ||
       isNaN(commands[2]) ||  
       isNaN(commands[3])){

        const rumfangKegleHelpEmbed = new MessageEmbed()
          .setColor('ff0000')
          .setTitle("Rumfang af en kegle")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/kegle')
          .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en kegle'})
          .setDescription('Rumfangs beregning af Studiehjælperen')
          .addFields(
              { name: 'For at udregne rumfang af en kugle, skriv:', value: "/rumfang kegle <h> <r>"},    
          )
          .setTimestamp()
      msg.reply(
        { embeds: [rumfangKegleHelpEmbed]});

      }else{

        let rumfangKegle = (Math.PI * commands[2] * (commands[3])^2)/3

        const rumfangKegleEmbed = new MessageEmbed()
          .setColor('00ff00')
          .setTitle("Rumfang af en kegle")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/kegle')
          .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en kegle'})
          .setDescription('Formel: pi * h * r^2')
          .addFields(
              { name: 'Rumfanget af en kugle: ', value: "Svar: " + rumfangKegle},    
          )
          .setTimestamp()
      msg.reply(
        { embeds: [rumfangKegleEmbed]});
      }
    }
