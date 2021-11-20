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
                    var flightdest = msg3.content
                    const embed4 = new Discord.MessageEmbed();
                    embed4
                    .setColor("#c90119")
                    .setTitle("TK Flight Planning")
                    .setDescription("Alright, we are almost finished with this prompt. What **day** is the flight going to be?")
                    .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
                    message.channel.send(embed4)

                    const filter4 = (m) => m.author.id === message.author.id;
                    const collector4 = message.channel.createMessageCollector(filter4, { max: 1, time: 180000 })
                    collector4.on('collect', (msg4) => {
                        console.log(msg4.content)
                        var flightdate = msg4.content
                        const embed5 = new Discord.MessageEmbed();
                        embed5
                        .setColor("#c90119")
                        .setTitle("TK Flight Planning")
                        .setDescription("To wrap up this post, who will be **hosting the flight?** Please say the **Roblox Userame or Discord Tag** of the flight host.")
                        .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
                        message.channel.send(embed5)

                        const filter5 = (m) => m.author.id === message.author.id;
                        const collector5 = message.channel.createMessageCollector(filter5, { max: 1, time: 180000 })
                        collector5.on('collect', (msg5) => {
                            console.log(msg5.content)
                            var flighthost = msg5.content

                            const embed6 = new Discord.MessageEmbed();
                            embed6
                            .setColor("#c90119")
                            .setTitle("TK Flight Planning")
                            .setDescription("Alright, thank you for all this information. I will now post this flight in the <#911432166221692969> channel.")
                            .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
                            message.channel.send(embed6)

                            const embed7 = new Discord.MessageEmbed();
                            embed7
                            .setColor("#c99666")
                            .setTitle("Upcoming Turkish Airlines Flight")
                            .setImage("https://cdn.discordapp.com/attachments/909976331897425941/911441708552695849/oh_em_gee.mp4")
                            .setDescription("An upcoming flight is being hosted. You must join 15 minutes before the flight time indicated below.")
                            .setAuthor("Turkish Airlines Flight Schedule","https://cdn.discordapp.com/attachments/909976389116133406/911433917821775882/goldentk.png")
                            .addFields(
                                { name: 'Airport:', value: airportlink, inline: true },
                                { name: 'Destination:', value: flightdest, inline: true },
                                { name: 'Flight Time:', value: flight_time, inline: true },
                                { name: 'Flight Date:', value: flightdate, inline: true },
                                { name: 'Flight Host:', value: flighthost, inline: true }
                            )

                            client.channels.cache.get(`911432166221692969`).send('@ everyone', { embed: embed7, })
                            message.channel.send('Flight Scheduled.')
                        })
                    })
                })

           })
        })
	}
}