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
        return { embeds: [arealParallelHelpEmbed] };
      
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
      return { embeds: [arealParallelEmbed] };
      }
  }