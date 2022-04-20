const messageModule = require('../index')

  messageModule();

  if(commands[0] === "/rumfang" && commands[1] === "pyramide"){ 
    if(isNaN(commands[2]) && isNaN(commands[3]) ||
       isNaN(commands[2]) ||
       isNaN(commands[3])){

        const rumfangPyramideHelpEmbed = new MessageEmbed()
          .setColor('ff0000')
          .setTitle("Rumfang af en pyramide")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/pyramide')
          .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for et pyramide'})
          .setDescription('Rumfangs beregning af Studiehjælperen')
          .addFields(
              { name: '***HUSK** at <Grundfladeareal> er arealet af grundfladen for pyramiden! Dette kan udregnes med:*', value: '/areal trekant <h> * <g> eller /areal firkant <l> * <b>'},
              { name: 'For at udregne rumfang af en pyramide, skriv:', value: "/rumfang pyramide <Grundfladeareal> <h>"},    
          )
          .setTimestamp()
      msg.reply(
        { embeds: [rumfangPyramideHelpEmbed]});

      }else{

        let rumfangPyramide = (commands[2] * commands[3])/3

        const rumfangPyramideEmbed = new MessageEmbed()
          .setColor('00ff00')
          .setTitle("Rumfang af en pyramide")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/pyramide')
          .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for et pyramide'})
          .setDescription('Formel: (Grundfladeareal * h)/3')
          .addFields(
              { name: 'Rumfanget af et pyramide: ', value: "Svar: " + rumfangPyramide},    
          )
          .setTimestamp()
          //.setFooter( {text: ${user} } )
      msg.reply(
        { embeds: [rumfangPyramideEmbed]});
      }
    }  
