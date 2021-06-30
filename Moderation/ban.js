module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    category: "moderation",
    description: "This command bans a member!",
    execute(client, message, cmd, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send('You couldnt ban that member');
        }
    }
}