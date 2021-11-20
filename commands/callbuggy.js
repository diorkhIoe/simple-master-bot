// init require
const Discord = require('discord.js');
var cooldown = false
const Trello = require('trello-node-api')("42197ba326f25b368f77f7be9adb0fbd", "5c9074bc7cc291655ba6dce70e75a4357ba993a4b6ed45fa0bea9b4004853288");

// export module
module.exports = {
	name : "callbuggy",
	description : "Call the buggy at Istanbul IST (available to corporate passengers.)",
	aliases : ["cb","corpbug"],
	ussage : null,
	hidden : false,
	admin : false,
	nsfw : false,
	async execute(client,message,args){
		if (!message.member.roles.cache.has('909944484186451988')){
            return message.channel.send(`You don't have the permission to use this command`)
        }
        if (cooldown == true){
            return message.channel.send(`Somebody has already called the Corporate Buggy in the past 45 seconds.`)
        }
        cooldown = true

        setTimeout(function(){
            cooldown = false
        },60000)

        const embed = new Discord.MessageEmbed();

        embed
        .setColor("#c99666")
        .setTitle("Call the iSAPASS Buggy")
        .setFooter("Say 'cancel' to end this prompt.")
        .setDescription("If you're currently in Istanbul Havalimani, **please respond with your current location** in order for the iSAPASS buggy to reach you.")
        .setAuthor("Turkish Airlines Corporate Services","https://cdn.discordapp.com/avatars/899005051446636584/342a5ae14075bf5ebfc9ea0c22708771.png?size=128")

        message.channel.send(embed);

        const filter = (m) => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 45000 })

        collector.on('collect', (msg) => {
            if (msg.content == "cancel"){return message.channel.send('Prompt Failed: Author cancelled')}
            console.log(msg.content)
            var location = msg.content

            const embed2 = new Discord.MessageEmbed();
            embed2
            .setColor("#c99666")
            .setDescription("Thank you, your request has been submitted and the buggy will be driving to your location ASAP. Please be patient and remain where you are until the buggy arrives. Abusing this feature will result in a temporary ban or mute in the Discord Server.")
            .setAuthor("Turkish Airlines Corporate Services","https://cdn.discordapp.com/avatars/899005051446636584/342a5ae14075bf5ebfc9ea0c22708771.png?size=128")
            message.channel.send(embed2);
            let guild = client.guilds.get('909676235641212979');
            let member = guild.member(message.author);
            let nickname = member ? member.displayName : null;

            let data = {
                name: nickname,
                desc: location,
                pos: 'top',
                idList: '61988cbca635ce6a79f38d95', //REQUIRED
                due: null,
                dueComplete: false,
                idMembers: ['MEMBER_ID', 'MEMBER_ID', 'MEMBER_ID'],
                idLabels: ['LABEL_ID', 'LABEL_ID', 'LABEL_ID'],
                urlSource: 'https://example.com',
                fileSource: 'file',
                idCardSource: 'CARD_ID',
                keepFromSource: 'attachments,checklists,comments,due,labels,members,stickers'
            };

            let response;
            try {
                response = Trello.card.create(data);
            } catch (error) {
                if (error) {
                    console.log('error ', error);
                }
            }
            console.log('response', response);
        })
	}
}