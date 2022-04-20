const messageModule = require('../index')

  messageModule();

  if(commands[0] === "/hjælp"){
    const HelpEmbed = new MessageEmbed()
    .setColor('#ffff00')
    .setTitle("Hjælp")
    .setAuthor({ name: 'Studiehjælperen: Oversigt over funktioner'})
    .addFields(
        { name: 'For at få hjælp til at udregne areal, skriv:', value: "/areal hjælp"},
        { name: 'For at få hjælp til at udregne rumfang, skriv:', value: "/rumfang hjælp"},
        { name: 'For at få hjælp til at udregne ligninger, skriv:', value: "/ligning hjælp"},
        { name: 'For at få hjælp til at udregne kvadratrod, skriv:', value: "/kvadratrod hjælp"},
        { name: 'For at få hjælp til at udregne valuta, skriv:', value: "/valuta hjælp"},
        { name: 'For at få hjælp til at få afspillet musik, skriv:', value: "/musik hjælp"},
    )
    .setTimestamp()

msg.reply(
  { embeds: [HelpEmbed] });

}