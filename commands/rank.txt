// init require
const Discord = require('discord.js');
const noblox = require('noblox.js');
const db = require('quick.db');


// export module
module.exports = {
	name : "rank",
	description : "Rank a player.",
	aliases : ["Promote"],
	ussage : null,
	hidden : true,
	admin : true,
	nsfw : false,
	async execute(client,message,args){
    const embed = new Discord.MessageEmbed();
		if (message.member.hasPermission("ADMINISTRATOR")){
      const robloxname = args[1]
      if (!robloxname){
        return message.channel.send('Missing arguments (1)')
      }
      const robloxid = await noblox.getIdFromUsername(robloxname)
      .then((robloxid) => {
        const ranks = parseInt(args[2])
        if (!ranks){
          return message.channel.send('Missing arguments (2)')
        }

        noblox.setRank({ group: process.env.GroupID, target: robloxid, rank: rank})
        embed
      .setFooter('Success')
      .setTimestamp()
      .setDescription('Operation Successful.')
      message.channel.send(embed)
      })
      .catch((err) => {
        console.log(err)
        return message.reply('There was an error.')
      })
    }else{
      embed
      .setFooter('Error')
      .setTimestamp()
      .setDescription("You don't have permission to use this command.")
      message.channel.send(embed)
    }
	}
}