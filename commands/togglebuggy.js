// init require
const Discord = require('discord.js');
const callbuggy = require ('/app/commands/callbuggy.js')

// export module
module.exports = {
	name : "togglebuggy",
	description : "check transmit and server runtime!",
	aliases : ["disablebuggy","enablebuggy","togbuggy"],
	ussage : null,
	hidden : false,
	admin : false,
	nsfw : false,
	async execute(client,message,args){
		if (!message.member.roles.cache.has('909937346613489674')){
            return message.channel.send(`You don't have the permission to use this command`)
        }
		callbuggy.toggle()
        message.channel.send(`Requested.`)
	}
}