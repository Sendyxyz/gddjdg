const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
const emoji = require('../emoji.json')
const mongoose = require('mongoose')
const ms = require('ms')
const moment = require('moment')
const Database = require('../Models/regModel.js')
const { rolVer, renk,embedCreator, permEmbed, trueEmbed } = require('../functions');
const member = require('../Models/member');
exports.run = async(client, message, args,author, victim) => {


message.channel.send("1. isim tagı: ``")
message.channel.send("2. isim tagı: ``")
message.channel.send("Etiket tagı: `#0000`")
message.react(emoji.luxer_green)


};

exports.commandSettings = {
    name: "tag",
    aliases: [],
    guildOnly: true, 
    coolDown: 5000, 
    description: "tag"
}