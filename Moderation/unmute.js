module.exports = {
    name: 'unmute',
    permissions: ["ADMINISTRATOR"],
    category: "moderation",
    description: "This unmutes a member",
    execute(client, message, cmd, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === '👨‍🎓 ╏ Family');
            let muteRole = message.guild.roles.cache.find(role => role.name === '🤐╏ mute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('Cant find that member!');
        }
    }
}