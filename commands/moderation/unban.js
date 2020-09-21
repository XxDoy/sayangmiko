const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    category: "moderation",
    run: async(client, message, args) => {
        if (message.deletable) message.delete();

        const member = args[0];
        let reason = args.slice(1).join(" ");
        if (reason === undefined) reason = 'Unspecified';

        if (!member) {
            let id = args[1];
            let reason = args[2];
            if (!id | !reason)
                message.channel.send("Maybe You Have Wrong Id & Stupid Reason  Try Again...!!!!").then(m => m.delete({ timeout: 5000 }))
            return message.channel.send("For Example t!unban (id) (reason)").then(m => m.delete({ timeout: 5000 }))
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            const embed = new MessageEmbed()
                .setTitle("Result Of Member Unbanned")
                .setColor("RANDOM")
                .setTimestamp()
                .addField("General", [
                    `**❯ User Unbanned:**, ${member} Finally This User Free!`,
                    `**❯ Reason:**, ${reason}`,
                    `**❯ Note: Okey, This Person Free For Now**`
                ])
            return message.channel.send(embed)

        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

    }
}