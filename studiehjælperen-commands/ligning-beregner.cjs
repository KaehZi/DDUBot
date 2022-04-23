//import { commands } from '../index.js'
//import { MessageEmbed } from 'discord.js'



//let _hello = import('../index.js');

//let _hello = import('../index.js'); 

//async function runApp() {
  //console.log(await (await _hello).hello());
  //console.log((await _hello).func1());
  //console.log("Test ")
//}

//runApp()
//.catch(err => { console.log(err); });

//const { commands } = require('../index');
const { MessageEmbed } = require("discord.js");

 
//WolframAlphaAPI() = import ('wolfram-alpha-api');
//import pkg from 'wolfram-alpha-api';
//import { WolframAlphaAPI } from "../node_modules/wolfram-alpha-api/lib/WolframAlphaAPI.cjs"
//const WolframAlphaAPI = pkg;
//import WolframAlphaAPI from 'wolfram-alpha-api';
//const { WolframAlphaAPI } = pkg;

//console.log(wolframAPI)

const WolframAlphaAPI = require('wolfram-alpha-api');
//const { commands } = require('../index.js');

//const { commands } = require('../index.js');
//const waApi = WolframAlphaAPI('DEMO-APPID');
const wolframAPI = WolframAlphaAPI("774UYL-GLW5P969T4");


import { commands } from '../index.js';
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