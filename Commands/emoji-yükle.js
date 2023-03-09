const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const emoji = require('../emoji.json')

exports.commandSettings = {
    name: "emoji-yükle",
    aliases: ["emoji","emoji-add","emoji-yükle"],
    guildOnly: true, 
    coolDown: 0, 
    description: "emoji-ekle [Link] [İsim]"
  
  },

  exports.run = async (client, message, args) => {

 if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send(new Discord.MessageEmbed().setTitle('Hata!').setColor('#ff0000').setDescription(`${message.author} bu komutu kullanabilmek için \`Emojileri Yönet\` Yetkisine sahip olmalısın.`));
    let link = args[0]
    let isim = args[1];
    let guild = message.guild;
    if (!link) return message.channel.send('Link Girmelisin');
    message.react(emoji.luxer_red)
    if (!isim) return message.channel.send('Emojiye isim seçmelisin');
    message.react(emoji.luxer_red)

    guild.emojis.create(`${link}`, `${isim}`)
        .then(emoji => 
         message.channel.send(`${emoji.luxer_green} \`${isim}\` adlı emojiyi sunucuya ekledim.`))
         message.react(emoji.luxer_green)
        .catch(console.error);

    }