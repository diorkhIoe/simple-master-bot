// init require
const Discord = require('discord.js');
const callbuggy = require ('/app/commands/callbuggy.js')

// export module
module.exports = {
	name : "disablebuggy",
	description : "check transmit and server runtime!",
	aliases : ["stopbuggy","stopbug"],
	ussage : null,
	hidden : false,
	admin : false,
	nsfw : false,
	async execute(client,message,args){
		if (!message.member.roles.cache.has('909937346613489674')){
            return message.channel.send(`You don't have the permission to use this command`)
        }
		callbuggy.disable()
        message.channel.send(`:x: Disabled Buggy Requests.`)

		var channel = message.guild.channels.cache.get('910673755326541855');
		channel.send(`${message.author} has **Disabled Buggy Requests.**`)
	}
}