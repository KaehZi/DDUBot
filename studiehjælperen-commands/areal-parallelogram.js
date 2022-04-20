const messageModule = require('../index')

  messageModule();

  if(commands[0] === "/areal" && commands[1] === "parallelogram" 
  || commands[0] === "areal" && commands[1] === "parallel"){ 
      if(isNaN(commands[2])|| 
         isNaN(commands[3])|| 
        (isNaN(commands[2]) && isNaN(commands[3]))){
      const arealParallelHelpEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("Areal af et parallelogram")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/parallellogram')
            .setAuthor({ name: 'Studiehjælperen: Udregning af areal for et parallelogram'})
            .setDescription('Formel: h * g')
            .addFields(
                { name: 'For at udregne areal af et parallelogram , skriv:', value: "/areal parallelogram <h> <g>"},
            )
            .setTimestamp()
           

      msg.reply(
        { embeds: [arealParallelHelpEmbed] });
      
      }else{
  
          let arealParallel = (commands[2] * commands[3])

          const arealParallelEmbed = new MessageEmbed()
            .setColor('#00ff00')
            .setTitle("Areal af et parallellogram")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/parallellogram')
            .setAuthor({ name: 'Studiehjælperen: Udregning af areal for et parallelogram'})
            .setDescription('Formel: h * g')
            .addFields(
            { name: 'Areal for et paralellogram udregnet:', value: "Svar: " + arealParallel},
             )
            .setTimestamp()
      msg.reply(
        { embeds: [arealParallelEmbed] });
      }
  }


  //Areal af parallelogram
  if(commands[0] === "/areal" && commands[1] === "trapez"){ 
      if(isNaN(commands[2]) || 
         isNaN(commands[3]) ||
         isNaN(commands[4]) || 
        (isNaN(commands[2]) && isNaN(commands[3]) && isNaN(commands[4]))){

      const arealTrapezHelpEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("Areal af en trapez")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trapez')
            .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trapez'})
            .addFields(
                { name: 'For at udregne areal af et parallelogram , skriv:', value: "/areal trapez <h> <a1> <a2>"},
                )
            .setTimestamp()
      msg.reply(
          { embeds: [arealTrapezHelpEmbed] });
      
      }else{
        
        let arealTrapez = 1/2 * commands[2] * (Number(commands[3]) + Number(commands[4]))

          const arealTrapezEmbed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle("Areal af en trapez")
                .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trapez')
                .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trapez'})
                .setDescription('Formel: 1/2 * h * (a1 + a2)')
                .addFields(
                { name: 'Areal for en trapez udregnet:', value: "Svar: " + arealTrapez},
                 )
                .setTimestamp()
      msg.reply(
        { embeds: [arealTrapezEmbed] });
      }
   }
    
   //Kvadratrod af et tal
   if(commands[0] === "/kvadratrod"){
    if(isNaN(commands[1])){
      const kvadratrodHelpEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("Kvadratrod")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/algebra/kvadratrod')
            .setAuthor({ name: 'Studiehjælperen: Kvadratrod'})
            .setDescription('Kvadratroden af et tal')
            .addFields(
                { name: 'For at tage kvadratroden af et tal, skriv:', value: "/kvadratrod <tal>"},
           
            )
            .setTimestamp()
    msg.reply(
      { embeds: [kvadratrodHelpEmbed] });
        
    }else{
      
      let kvadratrod = Math.sqrt(commands[1])

      const kvadratrodEmbed = new MessageEmbed()
            .setColor('#00ff00')
            .setTitle("Kvadratrod")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/algebra/kvadratrod')
            .setAuthor({ name: 'Studiehjælperen: Kvadratrod'})
            .setDescription('Kvadratroden af et tal')
            .addFields(
                { name: 'Kvadraten af et tal:', value: "Svar: " + kvadratrod},
            )
            .setTimestamp()
      msg.reply(
          { embeds: [kvadratrodEmbed] });
            }
        }