const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
const emoji = require('../emoji.json')
const Database = require('../Models/ExecutorModel.js')
const ms = require('ms')
const ceza = require('../Models/cezaSorgu.js')
const kayit = require('../Models/cezaKayit.js')

const { rolVer, renk, embedCreator, trueEmbed,setRoles,positionEmbed,botEmbed,cezaEmbed,log, logEmbed } = require('../functions');
exports.run = async(client, message, args, author, victim) => {
    if(!author.roles.cache.has(ayarlar.guildHammer.jailHammer) && !author.hasPermission("MANAGE_ROLES") && ayarlar.guildHammer.yts.some(u => !author.roles.cache.has(u))) return permEmbed(message)
let time = args[1]
let reason = args.splice(2).join(" ");

    let logKanal = client.channels.cache.get(ayarlar.guildLogs.jailLogs)

if (!victim || !time || !ms(time) || reason.length < 1) return trueEmbed(message,this.commandSettings.description)
if (message.member.roles.highest.position <= victim.roles.highest.position) return positionEmbed(message)
if (victim.user.bot) return botEmbed(message)
let data = await Database.find({guildID: ayarlar.guildSettings.guildID, victimID: victim.id, activity: true, Type: "JAIL"})
if(data.length >= 1 ) return cezaEmbed(message)
await ceza.findOneAndUpdate({ guildID: message.guild.id, execID: author.id }, { $inc: { Ban: 0, Jail: 1, Mute: 0, Vmute: 0 } }, { upsert: true });
await kayit.findOneAndUpdate({ guildID: message.guild.id, execID: victim.id }, { $inc: { Jail: 1, Ban: 0, Mute: 0, Vmute: 0 } }, { upsert: true });

let count = await Database.countDocuments().exec();
count = count == 0 ? 1 : count + 1;
let Penal = await new Database({
    guildID: ayarlar.guildSettings.guildID,
    execID: author.id,
    cezaID: count,
    victimID: victim.id,
    dateNow: Date.now(),
    activity: true,
    Temporary: true,
    Reason: reason,
    Type: "JAIL",  
    finishDate: (Date.now() + ms(time))
}).save()

let yaziSure = time.replace("h", " Saat").replace("m", " Dakika").replace("d", " G??n").replace("s", " Saniye");

setRoles(victim.id,ayarlar.guildRoles.jailRole)

embedCreator("#4D0A0A", ` ${victim} adl?? ??ye **${reason}** sebebi ile **${yaziSure}** boyunca cezal??ya at??ld??. (\`#${count}\`)`,message,[true,10000])
await ceza.findOneAndUpdate({ guildID: message.guild.id, execID: author.id }, { $inc: { Jail: 1 } }, { upsert: true });

if(logKanal) logEmbed(logKanal, `
${victim} ??yesi cezal??ya at??ld?? Ceza: S??resi \`${yaziSure}\`

**??? Ceza Yetkili:** ${author} \`${author.id}\`
**??? Cezan??n Ba??lama Tarihi:** \`${client.toDate(Date.now())}\`
**??? Cezan??n Biti?? Tarihi:**   \`${client.toDate(Date.now() + ms(time))}\`

**??? Ceza Numaras??** \`${count}\`


`,message,[false])
};

exports.commandSettings = {
    name: "tempjail",
    aliases: ["tjail"],
    guildOnly: true, 
    coolDown: 3000, 
    description: "tempjail @Luxer/ID [S??re] [Sebep] (Zamanl?? cezaland??r??l??r)"
}