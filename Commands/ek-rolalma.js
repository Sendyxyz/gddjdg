const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const emoji = require('../emoji.json')

exports.commandSettings = {
    name: "ecrol",
    aliases: ["ecrolalma"],
    guildOnly: true, 
    coolDown: 0, 
    description: "ecrol"
  }

  exports.run = async (client, message, args) => {
    client.api.channels(message.channel.id).messages.post({ data: {"content":`Merhaba **DENEME** üyeleri,\nÇekiliş katılımcısı alarak Nitro , Spoti , Netlfix , Exxen , BluTV gibi çeşitli ödüllerin sahibi olabilirsiniz.\nEtkinlik katılımcısı alarak çeşitli etkinliklerin yapıldığı anlarda herkesten önce haberdar olabilirsiniz ve çekilişlere önceden katılma hakkı kazanabilirsiniz.\n\n__Aşağıda ki butonlara basarak siz de bu ödülleri kazanmaya hemen başlayabilirsiniz!__`,"components":[{"type":1,"components":[

        {"type":2,"style":3,"custom_id":"buttoncekilis","label":"🎁 Çekiliş Katılımcısı"},
        {"type":2,"style":4,"custom_id":"buttonetkinlik","label":"🎉 Etkinlik Katılımcısı"}
        
        ]}]} })
  }
