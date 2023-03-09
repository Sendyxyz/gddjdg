const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const emoji = require('../emoji.json')

exports.commandSettings = {
    name: "modreload",
    aliases: ['modreboot', 'modrestart'],
    guildOnly: true, 
    coolDown: 0, 
    description: "reload"
  
  },

  exports.run = async (client, message, params, ) => {

   if (!message.guild) return

  if(params[0]) {
    let commandName  = params[0].toLowerCase()
    try {
      delete require.cache[require.resolve(`./${commandName}.js`)]
      client.commands.delete(commandName)
      const pull = require(`./${commandName}.js`)
      client.commands.set(commandName, pull)
    } catch(e) {
      return message.channel.send(`Bir hata oluştu ve **${commandName}** adlı komut reloadlanamadı.`)
    }

    message.channel.send(`__**${commandName}**__ adlı komut yeniden başlatılıyor!`).then(x => x.delete({timeout: 5000})).catch(() => { })

   return
  }
  message.channel.send(`**__Bot__ yeniden başlatılıyor!**`).then(msg => {
    console.log('[BOT] Yeniden başlatılıyor...')
    process.exit(0);
  });

  }
