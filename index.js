// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { MessageEmbed } = require("discord.js");
require("dotenv").config();

//var fetch = require('node-fetch');
const WolframAlphaAPI = require('wolfram-alpha-api');
const wolframAPI = WolframAlphaAPI("774UYL-GLW5P969T4");



// Create a new client instance
const myIntents = new Intents();
    myIntents.add( Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES )
const client = new Client({ intents: myIntents });
// When the client is ready, run this code
client.login(process.env.DISCORD_TOKEN);
client.on('ready', readyDiscord);
function readyDiscord(){
  console.log('[INFO] Studiehjælperen er online.'); 
}
client.on("messageCreate", gotMessage);
//**********************************************************************************************//
function gotMessage(msg){
    console.log(msg.content);
    let commands = msg.content.split(" ")
    console.log(commands)


  //Oversigt over hvilke kommandoer Studiehjælperen udsteder || /hjælp
  if(commands[0] === "/hjælp"){
        const HelpEmbed = new MessageEmbed()
        .setColor('#ffff00')
        .setTitle("Hjælp")
        .setAuthor({ name: 'Studiehjælperen: Oversigt over funktioner'})
        .addFields(
            { name: 'For at få hjælp til at udregne areal, skriv:', value: "/areal hjælp"},
            { name: 'For at få hjælp til at udregne rumfang, skriv:', value: "/rumfang hjælp"},
            { name: 'For at få hjælp til at udregne pythagoras, skriv:', value: "/pythagoras hjælp"},
            { name: 'For at få hjælp til at udregne ligninger, skriv:', value: "/ligning hjælp"},
            { name: 'For at få hjælp til at udregne kvadratrod, skriv:', value: "/kvadratrod hjælp"},
            { name: 'For at få hjælp til at udregne valuta, skriv:', value: "/valuta hjælp"},
            { name: 'For at få hjælp til at få afspillet musik, skriv:', value: "/musik hjælp"},
        )
        .setTimestamp()

  msg.reply(
      { embeds: [HelpEmbed] });

  }


  //Ligning hjælp embed || Lavet til formålet at der kommer et output hvis nogen prøver kommandoen som fra /hjælp
  if(commands[0] === '/ligning' && commands[1] === 'hjælp'){
    const ligningHelpEmbed = new MessageEmbed()
        .setColor('#ffff00')
        .setTitle("Udregning af ligninger")
        .setAuthor({ name: 'Studiehjælperen: Udregning af ligninger'})
        .addFields(
          {name: "For at udregne en ligning, skriv:", value: '/ligning beregning <ligning>'}
        )
        .setTimestamp()
     msg.reply(
        { embeds: [ligningHelpEmbed] })
    }

    //Valuta hjælp embed || Lavet til formålet at der kommer et output hvis nogen prøver kommandoen som fra /hjælp
    if(commands[0] === '/valuta' && commands[1] === 'hjælp'){
        const valutaHelpEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("UNDER UDVIKLING!")
            .setAuthor({ name: 'Studiehjælperen: Omregning af valuta'})
            .setTimestamp()
         msg.reply(
             { embeds: [valutaHelpEmbed] })  
        }
  
    //Musik hjælp embed || Lavet til formålet at der kommer et output hvis nogen prøver kommandoen som fra /hjælp
    if(commands[0] === '/musik' && commands[1] === 'hjælp'){
        const musikHelpEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("UNDER UDVIKLING!")
            .setAuthor({ name: 'Studiehjælperen: Afspilning af musik eller andet lyd'})
            .setTimestamp()
        msg.reply(
            { embeds: [musikHelpEmbed] })  
        }

    //Pythagoras hjælp
    if(commands[0] === '/pythagoras' && commands[1] === 'hjælp'){
      const pythagorasHelpEmbed = new MessageEmbed()
          .setColor('#ffff00')
          .setTitle("Udregning af Pythagoras")
          .setAuthor({ name: 'Studiehjælperen: Udregning af Pythagoras'})
          .addFields(
            {name: "For at udregne Pythagoras, skriv:", value: '/pythagoras beregn <a> <b>'}
          )
          .setTimestamp()
       msg.reply(
          { embeds: [pythagorasHelpEmbed] })
      }

  //Pythagoras funktion med embed implementeret
  if(commands[0] === "/pythagoras" && commands[1] === "beregn"){
    if(isNaN(commands[2])|| 
       isNaN(commands[3])|| 
       isNaN(commands[2]) && isNaN(commands[3])){
      const pythagorasHelpEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("Pythagoras")
        .setURL('https://www.webmatematik.dk/lektioner/matematik-c/trigonometri/retvinklede-trekanter')
        .setAuthor({ name: 'Studiehjælperen: Udregning af Pythagoras'})
        .setDescription('Pythagoras udregning af Studiehjælperen')
        .addFields(
            { name: 'For at udregne med pythagoras, skriv:', value: "/pythagoras <a> <b>"},
        )
        .setTimestamp()

      msg.reply(
          { embeds: [pythagorasHelpEmbed] });
    
      }else{

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

 

    //Oversigt over areal funktioner
    if(commands[0] === "/areal" && commands[1] === "" ||
      (commands[0] === "/areal" && commands[1] === "hjælp")){
        
      const arealHelpEmbed = new MessageEmbed()
            .setColor('#ffff00')
            .setTitle("Areal beregning")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal')
            .setAuthor({ name: 'Studiehjælperen: Udregning af arealer'})
            .setDescription('Areal udregning af Studiehjælperen')
            .addFields(
                { name: 'For at udregne areal af en firkant, skriv:', value: "/areal firkant <l> <b>"},
                { name: 'For at udregne areal af en trekant, skriv:', value: '/areal trekant <h> <g>' },
                { name: 'For at udregne areal af et paralellogram, skriv:', value: '/areal parallelogram <h> <g>' },
                { name: 'For at udregne areal af en cirkel, skriv:', value: "/areal cirkel <r>" },
                { name: 'For at udregne areal af en trapez, skriv:', value: "/areal trapez <h> <a1> <a2>" },
            )
            //.addField('Inline field title', 'Some value here', true)
            //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
            .setTimestamp()
      msg.reply(
        { embeds: [arealHelpEmbed] });
      }
      
  //Areal for en firkant funktion med embed
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
          //console.log("else bliver executed")

          let arealFirkant = (commands[2] * commands[3])

          const arealfirkantEmbed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle("Areal af en firkant")
                .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/rektangel')
                .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en firkant'})
                .setDescription('Formel: l * b')
                //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
                .addFields(
                { name: 'Areal for en firkant udregnet:', value: "Svar: " + arealFirkant},
            )
            .setTimestamp()
      msg.reply(
          { embeds: [arealfirkantEmbed] });
      }
      }

  //Areal for en trekant funktion med embed
  if(commands[0] === "/areal" && commands[1] === "trekant"){ 
      if(isNaN(commands[2])||
         isNaN(commands[3])|| 
        (isNaN(commands[2]) && isNaN(commands[3]))){
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
          //console.log("else bliver executed")

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
  if(commands[0] === "/areal" && commands[1] === "cirkel"){ 
  if(isNaN(commands[2])){
      const arealCirkelHelpEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("Areal af en cirkel")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/rektangel')
            .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en cirkel'})
            .setDescription('Formel: pi * r')
            .addFields(
                { name: 'For at udregne areal af en cirkel , skriv:', value: "/areal cirkel <r>"},
            )
            .setTimestamp()

      msg.reply(
          { embeds: [arealCirkelHelpEmbed] });
  
      }else{
      //console.log("else bliver executed")

      let arealCirkel = (Math.PI * (commands[2]))

      const arealCirkelEmbed = new MessageEmbed()
            .setColor('#00ff00')
            .setTitle("Areal af en cirkel")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/rektangel')
            .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en cirkel'})
            .setDescription('Formel: pi * r')
            //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
            { name: 'Areal for en cirkel udregnet:', value: "Svar: " + arealCirkel},
            )   
            .setTimestamp()

      msg.reply(
          { embeds: [arealCirkelEmbed] });
      }
  }

  //Areal af parallelogram
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
            //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
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
                .setTitle("Areal af en trapez")
                .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/parallellogram')
                .setAuthor({ name: 'Studiehjælperen: Udregning af areal for et parallelogram'})
                .setDescription('Formel: h * g')
                //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
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
            //.setDescription('Formel: 1/2 * h * (a1 + a2)')
            //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'For at udregne areal af et parallelogram , skriv:', value: "/areal trapez <h> <a1> <a2>"},
            )
            .setTimestamp()

      msg.reply(
          { embeds: [arealTrapezHelpEmbed] });
      
      }else{

          let arealTrapez = (1/2 * commands[2] * (Number(commands[3]) + Number(commands[4])))

          const arealTrapezEmbed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle("Areal af en trapez")
                .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trapez')
                .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trapez'})
                .setDescription('Formel: 1/2 * h * (a1 + a2)')
                //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
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
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trapez')
            .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en trapez'})
            .setDescription('Kvadratroden af et tal')
            //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
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
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/trapez')
            .setAuthor({ name: 'Studiehjælperen: Kvadratrod'})
            .setDescription('Kvadratroden af et tal')
            //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Kvadraten af et tal:', value: "Svar: " + kvadratrod},
            )
            .setTimestamp()
  msg.reply(
      { embeds: [kvadratrodEmbed] });
        console.log("kvadratrodEmbed afsendt")
        }
    }

    //Rumfang hjælp
    if(commands[0] === "/rumfang" && commands[1] === "hjælp"){
        const rumfangHelpEmbed = new MessageEmbed()
            .setColor('#ffff00')
            .setTitle("Rumfang beregning")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal')
            .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang'})
            .setDescription('Rumfangs beregning af Studiehjælperen')
            .addFields(
                { name: 'For at udregne rumfang af en kasse, skriv:', value: "/rumfang kasse <l> <b> <h>"},
                { name: 'For at udregne rumfang af en cylinder, skriv:', value: '/rumfang cylinder <h> <r>' },
                { name: 'For at udregne rumfang af en kugle, skriv:', value: "/rumfang kugle <r>" },
                { name: 'For at udregne rumfang af en kegle, skriv:', value: "/rumfang kegle <h> <r>" },
                { name: 'For at udregne rumfang af en pyramide, skriv:', value: '/rumfang pyramide <Areal af grundfladen> <h>'},
                { name: 'For at udregne rumfang af et prisme, skriv:', value: '/rumfang prisme <h> <g> <b>'}

            )
            //.addField('Inline field title', 'Some value here', true)
            //.setImage('https://i.imgur.com/pn9c0BL.jpeg')
            .setTimestamp()
            //.setFooter({ text: 'Webmatematik, iconURL: https://i.imgur.com/AfFp7pu.png' });
    msg.reply(
        { embeds: [rumfangHelpEmbed] });
    }

    //Rumfang af en kasse
    if(commands[0] === "/rumfang" && commands[1] === "kasse"){ 
        if(isNaN(commands[2]) || 
           isNaN(commands[3]) ||
           isNaN(commands[4]) || 
          (isNaN(commands[2]) && isNaN(commands[3]) && isNaN(commands[4]))){
    
        const rumfangKasseHelpEmbed = new MessageEmbed()
            .setColor('ff0000')
            .setTitle("Rumfang af en kasse")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/kasse')
            .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en kasse'})
            .setDescription('Rumfangs beregning af Studiehjælperen')
            .addFields(
                { name: 'For at udregne rumfang af en firkant/kasse, skriv:', value: "/rumfang firkant <l> <b> <h>"},    
            )
            .setTimestamp()
        msg.reply(
          { embeds: [rumfangKasseHelpEmbed]});

    }else{

        let rumfangKasse = (commands[2] * commands[3] * commands[4])

        const rumfangKasseEmbed = new MessageEmbed()
            .setColor('00ff00')
            .setTitle("Rumfang af en kasse")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/kasse')
            .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en kasse'})
            .setDescription('Formel: l * h * h')
            .addFields(
                { name: 'Rumfanget af en kasse: ', value: "Svar: " + rumfangKasse},    
            )
            .setTimestamp()
        msg.reply(
        { embeds: [rumfangKasseEmbed]});
    }
  }

    //Rumfang af en cylinder
    if(commands[0] === "/rumfang" && commands[1] === "cylinder"){ 
      if(isNaN(commands[2]) || 
         isNaN(commands[3]) || 
        (isNaN(commands[2]) && isNaN(commands[3]))){

          const rumfangCylinderHelpEmbed = new MessageEmbed()
            .setColor('ff0000')
            .setTitle("Rumfang af en cylinder")
            .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/rumfang-og-overfladeareal/cylinder')
            .setAuthor({ name: 'Studiehjælperen: Udregning af rumfang for en kasse'})
            .setDescription('Rumfangs beregning af Studiehjælperen')
            .addFields(
                { name: 'For at udregne rumfang af en cylinder, skriv:', value: "/rumfang firkant <h> <r>"},    
            )
            .setTimestamp()
        msg.reply(
          { embeds: [rumfangCylinderHelpEmbed]});

        }else{

          let rumfangCylinder = Math.PI * commands[2] * (commands[3])^2

          const rumfangCylinderEmbed = new MessageEmbed()
            .setColor('00ff00')
            .setTitle("Rumfang af en kasse")
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

      //Rumfang af en kugle
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

      //Rumfang af en kegle
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
  

        //Rumfang af et prisme
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

      //Rumfang af en pyramide
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

          
        
        //Ligningsløser
        if(commands[0] === "/ligning" && commands[1] === "beregning") {
          wolframAPI.getFull(""+commands[2]).then((queryresult) => {
            output: 'json'
            const pods = queryresult.pods;
            const output = pods.map((pod) => {
              const subpodContent = pod.subpods.map(subpod =>
                `  alt="${subpod.img.alt}">`
              ).join('\n');
              return `<h2>${pod.title}</h2>\n${subpodContent}`;
            }).join('\n');

              let solution = output.split("<h2>")

              let solution1 = String(solution);

              let solution2 = solution1.split("alt=");
              
              let solution3 = String(solution2)

              let solution4 = solution3.split(",")
              
              let solution5 = solution4[solution4.length-1]
            
              let solution6 = solution5.split('"')

              let solution7 = solution6[1]

        const ligningLøst = new MessageEmbed()
        .setColor('00ff00')
        .setTitle("Løsning af ligning")
        .setURL('https://www.webmatematik.dk/lektioner/matematik-c/ligninger/ligninger')
        .setAuthor({ name: 'Studiehjælperen: Udregning af ligning'})
        .addFields(
            { name: 'Løsning af ligningen: ', value: "Svar: " + solution7},    
        )
        .setTimestamp()
        .setFooter({ text: 'Wolfram|Alpha'});
    msg.reply(
      { embeds: [ligningLøst]}
      )})}}