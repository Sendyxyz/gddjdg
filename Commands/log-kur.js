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
    const parent = await message.guild.channels.create('Logs', { type: 'category' });
    await message.guild.channels.create('rol-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('tag-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('voice-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('oto-role-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('message-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('leave-log', { type: 'text', parent: parent.id });
    message.channel.send(`Main Loglari kurulumu başarıyla tamamlanmıştır. ${emoji.luxer_green}`)
}