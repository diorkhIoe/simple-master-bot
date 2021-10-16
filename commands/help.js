// init require
const Discord = require('discord.js');
const fs = require("fs");
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const owner = process.env.Owner;
const prefix = process.env.Prefix;

// export module
module.exports = {
	name : "help",
	description : "A list of bot commands and tips.",
	aliases : ["?","h","cmds"],
	ussage : "[command]",
	hidden : false,
	admin : false,
	nsfw : false,
	async execute(client,message,args){
		const {description, color} = client.setting;
		const own = client.users.resolve(owner);
		var desc = description.replace(/{{owner}}/g,`\`\`${own.tag}\`\``);


		var util = client.util;
		const embed = new Discord.MessageEmbed();

		if(!args[0]){
			var cm = commandFiles.map((e,i) => {
				const cmd = require(`../commands/${e}`)
				if(!cmd.hidden){
					return `| #${util.tn(util.addZero(i+1,2),1)} | ${util.tn(cmd.name,2)} | ${util.tn(cmd.aliases.join(", "),4)} |`
				}
				return null;
			});

			var batas = "+--------+------------+----------------------+",
			header = `\`\`\`\n| #${util.tn("No",1)} | ${util.tn("commands",2)} | ${util.tn("aliases",4)}\n\`\`\``,
			footer = `ℹ️  *use \`\`${prefix}help [command]\`\` for more info!*`;

			embed
			.setColor(color.hack)
			.setAuthor(`${client.user.username} | List of Commands`)
			.setDescription(
				`The Squid Game Community Discord Bot.\n\n**List of commands:**\n${header}\`\`\`css\n${cm.filter(e => {return e !== null} ).join("\n")}\`\`\`\n${footer}`
			)

			return message.channel.send(embed);

		}else{
			var comid = client.commands.get(args[0]);
			if(!comid)return message.channel.send(`there is no command like **'${args[0]}'**`)
			var ussage = comid.ussage == null ? "": `**🔸${util.tn("Ussage",3)} :**\n\`\`\` ${prefix+comid.name} ${comid.ussage}\`\`\``;
			embed
			.setColor(color.warning)
			.setTitle(`**${comid.name}**`)
			.setAuthor(`${client.user.username} | Help Command`)
			.setDescription(
				`**🔸${util.tn("Description",3)} :**\n\`\`\`${comid.description}\`\`\`\n`+
				`**🔸${util.tn("Aliase(s)",3)} :**\n\`\`\` ${comid.aliases.join(", ")}\`\`\`\n`+
				`${ussage}`
				)

			return message.channel.send(embed);
		}
		
	}
}