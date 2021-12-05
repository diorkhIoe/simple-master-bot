// init require
const Discord = require('discord.js');
const callbuggy = require ('/app/commands/callbuggy.js')

// export module
module.exports = {
	name : "staffcmds",
	description : "check the list of staff commands at Istanbul Havalimani.",
	aliases : ["staff","staffhelp"],
	ussage : null,
	hidden : false,
	admin : false,
	nsfw : false,
	async execute(client,message,args){
		if (!message.member.roles.cache.has('909937346613489674')){
            return message.channel.send(`You don't have the permission to use this command`)
        }
        message.channel.send("```LIST OF COMMANDS AT ISTANBUL HAVALIMANI\n=======================================\n/set gate (gate)\n/set radars on\n/set radars off\n/set directions on\n/set directions off\n/play\n/tp```")
	}
}