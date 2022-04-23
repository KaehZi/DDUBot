//import { commands } from '../index.js'
//import { MessageEmbed } from 'discord.js'
const { MessageEmbed } = require("discord.js");

 


const WolframAlphaAPI = require('wolfram-alpha-api');
const wolframAPI = WolframAlphaAPI("774UYL-GLW5P969T4");


//import { commands } from '../index.js';
 function ligningBeregner(){  
 
    console.log("Noget " + commands)
    wolframAPI.getFull(commands[2]).then((queryresult) => {
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
return { embeds: [ligningLøst]}
})}

exports.ligningBeregner = ligningBeregner;