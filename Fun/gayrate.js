

module.exports = {
    name: 'gayrate',
    permissions: [],
    description: 'You are GAY',
    execute(client, message, cmd, args, Discord) {

        const Nick = '0'
        const user = message.author
        const taggedUser = message.mentions.users.first ()
        let gayrate = Math.floor(Math.random () * 101)

      
        

    
    
       if (taggedUser) {
               let argsEmbed = new Discord.MessageEmbed()
                .setTitle("Gayrate Machine")
                .setColor("#000000")
                .setDescription(`${taggedUser.username} is \`${gayrate}%\` gay! 🏳️‍🌈`)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(argsEmbed).catch(e => {
                console.log(e)
            })
        } else if (user) {
            let gayrateEmbed = new Discord.MessageEmbed()
                .setTitle("Gayrate Machine")
                .setColor("#000000")
                .setDescription(`${user.username} is \`${gayrate}%\` gay! 🏳️‍🌈`)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(gayrateEmbed).catch(e => {
                console.log(e)
            })
           

        }
    },
      requiredRoles: [],
}