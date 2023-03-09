const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
const emoji = require('../emoji.json')
const mongoose = require('mongoose')
const ms = require('ms')
const moment = require('moment')
const Database = require('../Models/regModel.js')
const { rolVer, renk,embedCreator, permEmbed, trueEmbed, rolAl,positionEmbed } = require('../functions');
exports.run = async(client, message, args, author, victim) => {
    if(!message.member.roles.cache.has(ayarlar.reg.regHammer) && !message.member.hasPermission("ADMINISTRATOR") && ayarlar.guildHammer.yts.some(u => !author.roles.cache.has(u))) return permEmbed(message)
    const isim = args.slice(1).filter(x => isNaN(x)).map(arg => arg.charAt(0).toUpperCase() + arg.slice(arg.charAt(0).length).toLowerCase()).join(" ");
    const yas = args.slice(2).filter(x => !isNaN(x))[0];
    if(!victim || !isim || !yas) return trueEmbed(message, this.commandSettings.description)

    if (message.member.roles.highest.position <= victim.roles.highest.position) return positionEmbed(message)
    if(victim.user.bot) return botEmbed(message)



    const tag = victim.user.username.includes("✭") ? "✭" : ("⦁" === "" ?  "✭" : "⦁");


if(yas < 13) return embedCreator("dsa",`${client.red}   13 yaşından küçük kişileri kayıt edemezsin`,message,[true, 10000])
    victim.setNickname(`${tag} ${isim} | ${yas}`)
    let isiml = `${tag} ${isim} | ${yas}`
rolVer(victim.id, ayarlar.reg.erkekRoles)
rolAl(victim.id,ayarlar.guildRoles.unregister)
    Database.findOne({guildID: message.guild.id, victimID: victim.id}, (err, res) => {
        if(!res) {
        new Database({guildID: message.guild.id, victimID: victim.id, nicknames: [{isimler: `${isiml}`,rol: `<@&${ayarlar.reg.erkekRoles[0]}>`}]}).save()
        } else {
            res.nicknames.push({isimler: `${isiml}`,rol : `<@&${ayarlar.reg.erkekRoles[0]}>`})
        res.save()
        }
        
        })
        await Database.findOneAndUpdate({ guildID: message.guild.id, execID: author.id }, { $inc: { erkek: 1, kari: 0 } }, { upsert: true });
message.react(emoji.luxer_green)
embedCreator("dsa",`${victim} kişisi Başarıyla **Erkek** Olarak Kayıt Edildi.`,message,[true, 15000])

};

exports.commandSettings = {
    name: "erkek",
    aliases: ["e","adam"],
    guildOnly: true, 
    coolDown: 3000, 
    description: "erkek @Luxer/ID [İsim] [Yaş]"
}