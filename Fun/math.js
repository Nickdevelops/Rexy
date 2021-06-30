const math = require("mathjs")

module.exports = {
  name: 'math',
  permissions: [],
  execute(client, message, cmd, args, Discord) {

    try{

        const embed = new Discord.MessageEmbed()
        
        embed.addField('Question', args.join(" "))
        embed.addField('Solution', math.evaluate(args.join(" ")))
        message.channel.send(embed);
        
    }catch (err) {
        return message.channel.send('error')
    }        
         
  }
}
