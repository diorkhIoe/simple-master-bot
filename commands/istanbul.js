// init require
const Discord = require('discord.js');


// export module
module.exports = {
	name : "open-istanbul",
	description : "Announce Istanbul Airports' opening.",
	aliases : ["istus"],
	ussage : null,
	hidden : false,
	admin : false,
	nsfw : false,
	async execute(client,message,args){

        if (!message.member.roles.cache.has('911443203884982353')){
            return message.channel.send(`You don't have the permission to use this command`)
        }

        // send response to initial message
		const embed1 = new Discord.MessageEmbed();
        embed1
        .setColor("#c99666")
        .setTitle("Server Opened - İstanbul Havalimanı")
        .setImage("https://cdn.discordapp.com/attachments/909976389116133406/911448657973375006/istanbul-server-open.png")
        .setDescription("A flight at İstanbul Havalimanı has begun. You now have 15 minutes from when this message was originally posted to join the server before it's locked. More information on the flight can be seen above. https://www.roblox.com/games/8011176455/istanbul-redirect")
        .setAuthor("Turkish Airlines Flight Schedule","https://cdn.discordapp.com/attachments/909976389116133406/911433917821775882/goldentk.png")

        const message2 = client.channels.cache.get(`911432166221692969`).send('@ everyone', { embed: embed1, })

        setTimeout(function(){
            message2.Delete()
            const embed2 = new Discord.MessageEmbed();
         embed2
         .setColor("#c99666")
         .setTitle("Server Closed - İstanbul Havalimanı")
         .setImage("https://cdn.discordapp.com/attachments/909976389116133406/911448657704923136/istanbul-server-closed.png")
         .setDescription("İstanbul Havalimanı has been locked, you can no longer join the server.")
         .setAuthor("Turkish Airlines Flight Schedule","https://cdn.discordapp.com/attachments/909976389116133406/911433917821775882/goldentk.png")

          const msg = client.channels.cache.get(`911432166221692969`).send(embed2)
        },30000)
	}
}