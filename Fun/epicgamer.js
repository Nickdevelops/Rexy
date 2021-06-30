module.exports = {
    name: 'epicgamer',
    permissions: [],
    description: 'OMAGA thats some epicgamer stuf!',
    execute(client, message, cmd, args, Discord) {

    
        const user = message.author
        const taggedUser = message.mentions.users.first ()
        let epicgamer = Math.floor(Math.random () * 101)

        if (taggedUser) {
               let argsEmbed = new Discord.MessageEmbed()
                .setTitle("Epicgamer Machine")
                .setColor("#000000")
                .setDescription(`${taggedUser.username} is \`${epicgamer}%\` epicgamer!`)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(argsEmbed).catch(e => {
                console.log(e)
            })
        } else if (user) {
            let epicgamerEmbed = new Discord.MessageEmbed()
                .setTitle("Epicgamer Machine")
                .setColor("#000000")
                .setDescription(`${user.username} is \`${epicgamer}%\` epicgamer!`)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(epicgamerEmbed).catch(e => {
                console.log(e)
            });

        }
    },
      requiredRoles: [],
}