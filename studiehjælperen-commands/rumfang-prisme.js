const messageModule = require('../index')

  messageModule();

  if(commands[0] === "/rumfang" && commands[1] === "prisme"){ 
    if(isNaN(commands[2]) && isNaN(commands[3]) && isNaN(commands[4]) ||
       isNaN(commands[2]) ||
       isNaN(commands[3]) ||
       isNaN(commands[4])){

        const rumfangPrismeHelpEmbed = new MessageEmbed()
          .setColor('ff0000')
          .setTitle("Rumfang af en prisme")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/prisme')
          .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for et prisme'})
          .setDescription('Rumfangs beregning af Studiehjælperen')
          .addFields(
              { name: '***HUSK** at <b> er arealet af grundfladen for prismet! Dette kan udregnes med:*', value: '/areal trekant <h> * <g>'},
              { name: 'For at udregne rumfang af en kugle, skriv:', value: "/rumfang prisme <h> <g> <b>"},    
          )
          .setTimestamp()
      msg.reply(
        { embeds: [rumfangPrismeHelpEmbed]});

      }else{

        let rumfangPrisme = 1/2 * commands[2] * commands[3] * commands[4]

        const rumfangPrismeEmbed = new MessageEmbed()
          .setColor('00ff00')
          .setTitle("Rumfang af en prisme")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/prisme')
          .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for et prisme'})
          .setDescription('Formel: 1/2 * h * g * b')
          .addFields(
              { name: 'Rumfanget af et prisme: ', value: "Svar: " + rumfangPrisme},    
          )
          .setTimestamp()
      msg.reply(
        { embeds: [rumfangPrismeEmbed]});
      }
    }
