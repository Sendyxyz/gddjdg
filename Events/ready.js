const ayarlar = require('../ayarlar.json');
const moment = require("moment")
const Database = require('../Models/ExecutorModel.js')
const data = require('../Models/komutEngel')

  //ETKİNLİK ROL ALMA
    client.ws.on('INTERACTION_CREATE', async interaction => {  
      let name = interaction.data.custom_id
      let GameMap = new Map([
          ["buttoncekilis",`${ayarlar.guildRoles.cekilis}`],
          ["buttonetkinlik",`${ayarlar.guildRoles.etkinlik}`]
  
      ])
      let member = await client.guilds.cache.get(ayarlar.guildSettings.guildID).members.fetch(interaction.member.user.id)
      if(!GameMap.has(name) || !member) return;
      let role = GameMap.get(name)
      let returnText;
      if(member.roles.cache.has(role)){
          await member.roles.remove(role)
          returnText = `Rol üzerinizden alındı`
      }else{
          await member.roles.add(role)
          returnText = `Rol üzerinize verildi`
        }
      client.api.interactions(interaction.id, interaction.token).callback.post({
          data: {
              type: 4,
              data: {
                  content: returnText,
                  flags: "64"}}})});
  




module.exports = async() => {
        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bruh Aktif, Komutlar ve Eventler Yüklendi!`);
        client.user.setPresence({ activity: { name: ayarlar.botSettings.activity, type: "PLAYING" }, status: ayarlar.botSettings.status })
            .catch(console.error);
client.channels.cache.get(ayarlar.botSettings.botVoiceChannel).join()
let all = data.findOne({guild: ayarlar.guildSettings.guildID},(err,res) => {
    if(!res) return
    let aaa = res.engel || []
  aaa.forEach( (element) => {
    client.blockedFromCommand.push(element)
  });
  
  })




    },


    module.exports.reqEv = {
        event: "ready",
        isim: "Presence Ayari"
    };