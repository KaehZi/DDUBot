const messageModule = require('../index')

  messageModule();

  if(commands[0] === "/rumfang" && commands[1] === "kugle"){ 
    if(isNaN(commands[2]) ||  
      (isNaN(commands[2]))){

        const rumfangKugleHelpEmbed = new MessageEmbed()
          .setColor('ff0000')
          .setTitle("Rumfang af en kugle")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/kugle')
          .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en kugle'})
          .setDescription('Rumfangs beregning af Studiehjælperen')
          .addFields(
              { name: 'For at udregne rumfang af en kugle, skriv:', value: "/rumfang kugle <r>"},    
          )
          .setTimestamp()
      msg.reply(
        { embeds: [rumfangKugleHelpEmbed]});

      }else{

        let rumfangKugle = Math.PI * 4/3 * (commands[2])^3

        const rumfangKugleEmbed = new MessageEmbed()
          .setColor('00ff00')
          .setTitle("Rumfang af en kugle")
          .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/kugle')
          .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en kugle'})
          .setDescription('Formel: pi * 4/3 * r^3')
          .addFields(
              { name: 'Rumfanget af en kugle: ', value: "Svar: " + rumfangKugle},    
          )
          .setTimestamp()
      msg.reply(
      { embeds: [rumfangKugleEmbed]});
    }
  }