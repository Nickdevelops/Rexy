module.exports = {
    name: 'kick',
    permissions: [],
   description: "Kick Command!",
    execute(client, message, cmd, args, Discord){
        if(message.member.permissions.has("KICK_MEMBERS")) {
        const target = message.mentions.users.first();
        const embed = new Discord.MessageEmbed()
        .setTitle("User has been kicked")
        .setDescription(`<@${target.id}> has been kicked by <@${message.author.id}>`)
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(embed);
        }else{
            message.channel.send(`Member not found!`);
        }
    } else {
        message.reply("You don't have the right permissions to write this message!")
    }
    }
}