const request = require("node-superfetch")

module.exports = {
    name: 'would-you-rather',
    aliases: ['wyr'],
    permissions: [],
    description: "Send some would-you rather questions",
    async execute (client, message, cmd, args, Discord)  {

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":X_: You dont have the perms to run this command.")

        let option1
        let option2
        let URLresult

        const { text } = await request.get('http://either.io/')
        URLresult = await JSON.parse(text.match(/window.initial_question = (\{.+\})/)[1]).question

        const url = `http://either.io/${URLresult.id}/${URLresult.slug}`

        option1 = await URLresult.option_1
        option2 = await URLresult.option_2

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Would You Rather')
        .setAuthor(`By ${URLresult.display_name}`)
        .setURL(url)
        .setDescription(`${ option1} **or** ${ option2}?`)

    
        message.channel.send(exampleEmbed).then(embedMessage => {
            embedMessage.react(':5178a:');
            embedMessage.react(':b_:');
        })


    }
}
