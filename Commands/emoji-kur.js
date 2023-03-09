const { Database } = require("ark.db");
const db = new Database("../emoji.json");

exports.commandSettings = {
    name: "emoji-kur",
    aliases: ["emojikur"],
    guildOnly: true, 
    coolDown: 0, 
    description: "emojikur"
  }

  exports.run = async (client, message, args) => {
    const emojis = [
        { name: "luxer_green", url: "https://cdn.discordapp.com/emojis/714580621166510180.gif?size=128&quality=lossless" },
        { name: "luxer_red", url: "https://cdn.discordapp.com/emojis/714580620982091798.gif?size=128&quality=lossless" },
        { name: "luxer_join", url: "https://cdn.discordapp.com/emojis/721033643111219242.gif?size=128&quality=lossless" },
        { name: "luxer_leave", url: "https://cdn.discordapp.com/emojis/931993906961342484.gif?size=128&quality=lossless" },
        { name: "luxer_banned", url: "https://cdn.discordapp.com/emojis/748618263071555645.gif?v=1" },
        { name: "luxer_jailed", url: "https://cdn.discordapp.com/emojis/878303820181024788.png?v=1" },

    ]
 emojis.forEach(async (x) => {
      if (message.guild.emojis.cache.find((e) => x.name === e.name)) return db.set(x.name, message.guild.emojis.cache.find((e) => x.name === e.name).toString());
      const emoji = await message.guild.emojis.create(x.url, x.name);
      await db.set(x.name, emoji.toString());
      message.channel.send(`\`${x.name}\` isimli emoji oluşturuldu! (${emoji.toString()})`);
    });
    }