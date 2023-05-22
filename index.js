const { Client, MessageEmbed,WebhookClient } = require('discord.js-selfbot-v13');
const client = new Client({
  checkUpdate: false,
});
const config = require('./config.json')

const webhookClient = new WebhookClient({ url: config.webhook });


client.on('ready', async () => {
  console.log(`${client.user.tag} is ready!`);
})

client.on('messageCreate', async (message) => {
  if (message.author.id !== "999736048596816014")
    if (message.content !== "A wild countryball appeared!") return;
      var Attachment = (message.attachments)
      if(!Attachment) return;

    const embed = new MessageEmbed()
        .setTitle("Sniped a countryball in **"+message.guild.name+"**")
        .setDescription(`channel: <#${message.channel.id}> on https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`)
        .setImage(Array.from(Attachment)[0][1].url)
        .setFooter("github.com/mohammad87115 • discord.gg/6985", "https://cdn.discordapp.com/avatars/785792156270460929/d269809d788d083c19ac96b9b642cdb0.png?size=1024")
        .setTimestamp()
        .setColor("#ffffff");

        



    webhookClient.send({
      content: "@here **New countryball sniped**",
      username: "Ballsdex Sniper",
      avatarUrl: 'https://cdn.discordapp.com/attachments/1110143073683521577/1110143792675303505/nt_knWwREvnlGyBIFE.png',
      embeds: [embed],
    })

    
    console.log("Sniped a ball in " + message.guild.name + "/" + message.channel.name)

    
})

client.on('messageCreate', async (message) => {
  if (message.author.id !== "1061145299927695400")
    if (message.content !== "A wild empire appeared!") return;
      var Attachment = (message.attachments)
      if(!Attachment) return;

    const embed = new MessageEmbed()
        .setTitle("Sniped a empireball in **"+message.guild.name+"**")
        .setDescription(`channel: <#${message.channel.id}> on https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`)
        .setImage(Array.from(Attachment)[0][1].url)
        .setFooter("github.com/mohammad87115 • discord.gg/6985", "https://cdn.discordapp.com/avatars/785792156270460929/d269809d788d083c19ac96b9b642cdb0.png?size=1024")
        .setTimestamp()
        .setColor("#ffffff");

        



    webhookClient.send({
      content: "@here **New empireball sniped**",
      username: "Empireballs Sniper",
      avatarUrl: 'https://cdn.discordapp.com/attachments/1110143073683521577/1110143792675303505/nt_knWwREvnlGyBIFE.png',
      embeds: [embed],
    })

    
    console.log("Sniped a ball in " + message.guild.name + "/" + message.channel.name)

    
})


client.login(config.token);
