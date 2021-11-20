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
        .setTitle("TK Flight Planning")
        .setDescription("You've begun the process of planning a Turkish Airlines Flight. __What **Time** will this flight take place?__")
        .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
        message.channel.send(embed);
        const filter = (m) => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 180000 })

        collector.on('collect', (msg) => {
            console.log(msg.content)
            var flight_time = msg.content
            // send response to time question
	        const embed2 = new Discord.MessageEmbed();
             embed2
           .setColor("#c90119")
           .setTitle("TK Flight Planning")
           .setDescription("Great! Now, what will the departing airport be? Please send a **link.**")
           .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
           message.channel.send(embed2);

           const filter2 = (m) => m.author.id === message.author.id;
           const collector2 = message.channel.createMessageCollector(filter2, { max: 1, time: 180000 })

           collector2.on('collect', (msg2) => {
               console.log(msg2.content)
               var airportlink = msg2.content
            const embed3 = new Discord.MessageEmbed();
            embed3
             .setColor("#c90119")
             .setTitle("TK Flight Planning")
             .setDescription("Great! Now, what will the **destination** be? Please write this in __plain text.__")
             .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
            message.channel.send(embed3);
            const filter3 = (m) => m.author.id === message.author.id;
            const collector3 = message.channel.createMessageCollector(filter3, { max: 1, time: 180000 })

            collector3.on('collect', (msg3) => {
                console.log(msg3.content)
            })

           })
        })
	}
}