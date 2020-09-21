const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    cateogry: "utilites",
    run: async(client, message, args) => {
        if (message.deletable) message.delete();

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });
        const embed = new MessageEmbed()
            .setTitle('__**♨ Command\'s ♨**__')
            .setThumbnail('https://cdn.discordapp.com/attachments/752751493517672448/753891485799415829/20200909_211743.jpg')
            .setAuthor(`${message.guild.name}`, avatar)
            .addFields({ name: '__**📝 My Prefix**__!', value: '__**💠 at!**__!' }, { name: '==================================', value: '\u200B' }, { name: '\_\_\*\*\*🔑Admin!\*\*\*\_\_\_', value: '**- Clear**\n **- Mute**\n **- Unmute**\n **- Ban**\n **- Unban**\n **- Kick**\n **- Report**\n **- Warning**', inline: true }, { name: '\_\_\*\*\*🔨Utilities!\*\*\*\_\_\_', value: '**- Avatar**\n **- Ping**\n **- Help**', inline: true })
            .setFooter(`Requested by ${message.author.username}`, avatar)
            .setColor('BLACK')
            .setTimestamp()
        return message.channel.send(embed);

    }
}