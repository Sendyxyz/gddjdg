const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const emoji = require('../emoji.json')

exports.commandSettings = {
    name: "rolsuz",
    aliases: [],
    guildOnly: true, 
    coolDown: 0, 
    description: "rolsuz"
  }

  exports.run = async (client, message, args, embed) => {
    let luxercim = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)
    if(args[0] == "ver") {
        luxercim.forEach(r => {
    r.roles.add(ayarlar.guildRoles.unregister)
    })
    message.channel.send("Sunucuda rolü olmayan \`"+ luxercim.size +"\` kişiye kayıtsız rolü verildi!")
    } else if(!args[0]) {
    message.channel.send("Sunucumuzda rolü olmayan \`"+ luxercim.size +"\` kişi var. Bu kişilere kayıtsız rolü vermek için \`.rolsüz ver\` komutunu uygulayın!")  
   }
  }