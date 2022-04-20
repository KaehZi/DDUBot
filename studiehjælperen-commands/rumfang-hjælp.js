const messageModule = require('../index')

  messageModule();

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
        .setTimestamp()
msg.reply(
    { embeds: [rumfangHelpEmbed] });
}