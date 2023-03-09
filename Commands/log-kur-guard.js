const ayarlar = require("../ayarlar.json");
const emoji = require('../emoji.json')

exports.commandSettings = {
    name: "cezalogkur",
    aliases: ["cezalogkurulum","ceza-log-kur"],
    guildOnly: true, 
    coolDown: 5000, 
    description: "log-kur"
}

  exports.run = async (client, message, args) => {

  const parent = await message.guild.channels.create('Guardian Logs', { type: 'category' });
  await message.guild.channels.create('guard-log', { type: 'text', parent: parent.id });
  await message.guild.channels.create('database-log', { type: 'text', parent: parent.id });
  await message.guild.channels.create('sekme-log', { type: 'text', parent: parent.id });
  await message.guild.channels.create('silinen-roller-log', { type: 'text', parent: parent.id });
  message.channel.send(`Guard Loglari kurulumu başarıyla tamamlanmıştır. ${emoji.luxer_green}`)
}