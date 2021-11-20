// init require
const Discord = require('discord.js');


// export module
module.exports = {
	name : "planflight",
	description : "plan a flight",
	aliases : ["plan"],
	ussage : null,
	hidden : false,
	admin : true,
	nsfw : false,
	async execute(client,message,args){

        // send response to initial message
		const embed = new Discord.MessageEmbed();
        embed
        .setColor("#c90119")
        .setTitle("Planning Turkish Airlines Flight")
        .setDescription("You've begun the process of planning a Turkish Airlines Flight. __What *Time* will this flight take place?__")
        .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
        message.channel.send(embed);
        const filter = (m) => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(message.channel, filter, {time: 5000})

        collector.on('collect', (msg) => {
            console.log(msg.content)

            // send response to time question
	    	const embed2 = new Discord.MessageEmbed();
           embed2
           .setColor("#c90119")
           .setTitle("Planning Turkish Airlines Flight")
           .setDescription("Great! Now, what will the departing airport be? Please send a **link.**")
           .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
           message.channel.send(embed2);
        })
	}
}