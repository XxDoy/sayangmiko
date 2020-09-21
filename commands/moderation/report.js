const { MessageEmbed } = require('discord.js');
const { stripIndent } = require("common-tags");

module.exports = {
    name: "report",
    cateogry: "moderation",
    description: "report members",
    usage: "<mention | id>",
    run: async(client, message, args) => {
        if (message.deletable) message.delete();

        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!rMember)
            return message.reply("Couldn't find that person").then(m => m.delete(5000));

        if (!rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.reply("Can't report that member").then(m => m.delete(5000));

        if (!args[1])
            return message.channel.send("please provide a reason for the report").then(m => m.delete(5000));

        const channel = message.guild.channels.cache.find(channel => channel.name === 'report');

        if (!channel)
            return message.channel.send("i Could not find a \`#reports\` channels").then(m => m.delete(5000));

        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Reported member", rMember.user.displayAvatarURL)
            .setDescription(stripIndent `**> Member: ** ${rMember} (${rMember.id})
            **> Reported by: ** ${message.member} (${message.member.id})
            **> Reported in: ** ${message.channel}
            **> Reason: ** ${args.slice(1).join(" ")}`);
        return channel.send(embed);
    }
}