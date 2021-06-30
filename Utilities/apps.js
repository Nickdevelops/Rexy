module.exports = {
    name: 'apps',
    permissions: [],
    description: "Apps!",
    async execute(client, message, cmd, args, Discord) {
        const StaffRole = message.guild.roles.cache.get('854098112146571274')
       const ELAS = message.guild.roles.cache.get('854098112146571274')
        const EKAB = message.guild.roles.cache.get('859147763593773066')

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Staff`)
        .setURL()
        message.channel.send(embed)

        const embed2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('ΕΛ.ΑΣ')
        .setURL()
        message.channel.send(embed2)

        const embed3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Ε.Κ.Α.Β`)
        .setURL()
        message.channel.send(embed3)
    }
}