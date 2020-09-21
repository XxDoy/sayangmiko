module.exports = {
    name: "mute",
    category: "moderation",
    run: async(client, message, args) => {
        if (!message.member.hasPermission(['ADMINISTRATOR'])) return;
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        if (member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get("752350200550522883");
        let verifiedRole = message.guild.roles.cache.get('752367087409823775');
        if (mutedRole) {
            member.roles.add(mutedRole);
            member.roles.remove(verifiedRole);
            message.channel.send("User was Successfully muted.");
        }
    }
}