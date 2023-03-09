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
    const parent = await message.guild.channels.create('Criminal Logs', { type: 'category' });
    await message.guild.channels.create('ban-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('jail-Log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('mute-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('vmute-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('rol-tag', { type: 'text', parent: parent.id });
    await message.guild.channels.create('yasakli-komut-log', { type: 'text', parent: parent.id });
    message.channel.send(`Ceza Loglari kurulumu başarıyla tamamlanmıştır. ${emoji.luxer_green}`)
}