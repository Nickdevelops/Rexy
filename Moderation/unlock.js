module.exports = {
    name: "unlock",
    aliases: [],
    cooldown: 0,
    permissions: ["ADMINISTRATOR"],
    category: "moderation",
    async execute(client, message, cmd, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You dont have permissions to use this command')

        let msg = await message.channel.send("Loading...")

        try {
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: true,
                ADD_REACTIONS: true
         })
         msg.edit("The channel is now unlocked!")
            
        }catch(e) {
            console.log(e)
        }

    }
}