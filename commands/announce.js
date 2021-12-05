// init require
const Discord = require('discord.js');

function attachIsImage(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
}

// export module
module.exports = {
	name : "announce",
	description : "Call the buggy at Istanbul IST (available to corporate passengers.)",
	aliases : ["ann","shout"],
	ussage : null,
	hidden : false,
	admin : false,
	nsfw : false,
	async execute(client,message,args){
		if (!message.member.roles.cache.has('909937346613489674')){
            return message.channel.send(`You don't have the permission to use this command`)
        }

        const embed = new Discord.MessageEmbed();
        embed
        .setColor("#c90119")
        .setTitle("Create Announcement")
        .setFooter("Say 'cancel' to end this prompt.")
        .setDescription("You've begun the announcement creating process. Now to start us off, what will the **title** of your announcement be?")
        .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")

        message.channel.send(embed);

        const filter = (m) => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 45000 })
        collector.on('collect', (msg) => {
            if (msg.content == "cancel"){return message.channel.send('Prompt Failed: Author cancelled')}
            console.log(msg.content)
            var title = msg.content

            const embed2 = new Discord.MessageEmbed();
            embed2
            .setColor("#c90119")
            .setTitle("Create Announcement")
            .setFooter("Say 'cancel' to end this prompt.")
            .setDescription("Great! Now, what will the **main body text** of your announcement be?")
            .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
    
            message.channel.send(embed2);

            const filter2 = (m) => m.author.id === message.author.id;
            const collector2 = message.channel.createMessageCollector(filter2, { max: 1, time: 45000 })
            collector2.on('collect', (msg2) => {
                if (msg2.content == "cancel"){return message.channel.send('Prompt Failed: Author cancelled')}
                console.log(msg2.content)
                var mainbodytext = msg2.content

                const embed3 = new Discord.MessageEmbed();
                embed3
                .setColor("#c90119")
                .setTitle("Create Announcement")
                .setFooter("Say 'cancel' to end this prompt.")
                .setDescription("Fantastic! Now, would you like to add an image to your announcement? If so, please send an **attachment, not a link** to the image. **If not, say 'skip'**")
                .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
    
                message.channel.send(embed3);

                const filter3 = (m) => m.author.id === message.author.id;
                const collector3 = message.channel.createMessageCollector(filter3, { max: 1, time: 45000 })
                collector3.on('collect', (msg3) => {
                    if (msg3.content == "cancel"){return message.channel.send('Prompt Failed: Author cancelled')}
                    var image = ''
                    if (!msg3.content == "skip"){
                        image = ''
                    }else if(msg3.attachments.size > 0){
                        image = msg3.attachments.every(attachIsImage)
                    }

                    const embed4 = new Discord.MessageEmbed();
                    embed4
                    .setColor("#c90119")
                    .setTitle("Create Announcement")
                    .setFooter("Say 'cancel' to end this prompt.")
                    .setDescription("Now finally, which channel do you want to announce this in? **SEND THE CHANNEL ID**")
                    .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
    
                    message.channel.send(embed4);

                    const filter4 = (m) => m.author.id === message.author.id;
                    const collector4 = message.channel.createMessageCollector(filter4, { max: 1, time: 45000 })
                    collector4.on('collect', (msg4) => {
                        if (msg4.content == "cancel"){return message.channel.send('Prompt Failed: Author cancelled')}
                        console.log(msg4.content)
                        var channel = msg4.content
                        if (!channel == parseInt(channel)){
                            return message.channel.send('Prompt Failed: you didnt send a channel ID.')
                        }
                        
                        var chnl = message.guild.channels.cache.get(channel);
                        if (!chnl){
                            return message.channel.send('Prompt Failed: you didnt send a channel ID.')
                        }

                        const embed6 = new Discord.MessageEmbed();
                        embed6
                        .setColor("#c99666")
                        .setDescription("Great, your announcement has been made. Check the channel you submitted for the announcement.")
                        .setAuthor("Turkish Airlines Administrative A.I.","https://cdn.discordapp.com/attachments/909976331897425941/911410962362429490/turkish-airlines-logo-1E368810A4-seeklogo.com.png")
                        message.channel.send(embed6);




                        const embed5 = new Discord.MessageEmbed();
                        embed5
                        .setColor("#c99666")
                        .setTitle(title)
                        .setFooter(message.member.displayName,message.author.displayAvatarURL)
                        .setTimestamp()
                        .setDescription(mainbodytext)
                        if(imageval != ''){
                            embed5.setImage(imageval)
                        }
                        chnl.send('@everyone', { embed: embed5 });
                    })
                })
            })
        })
	}
}