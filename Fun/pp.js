module.exports = {
   name: 'pp',
    permissions: [],
    description: "Penis Command",
    async execute(client, message, cmd, args, Discord) {
      const penissize = ['Bruuhh you dont have a pp', '8=>', '8==>', '8===>', '8====>', '8=====>', '8======>', '8=======>', '8========>', '8=========>', '8==========>']
      const result = Math.floor(Math.random() * penissize.length)

      const user = message.author
      const taggedUser = message.mentions.users.first ()
      
      if (taggedUser) {
        let argsEmbed = new Discord.MessageEmbed()
         .setAuthor(taggedUser.username, taggedUser.displayAvatarURL({ dynamic: true }))
         .setTitle("PP Counter")
         .setColor("#000000")
         .addField(`${taggedUser.username}'s pp size:`, penissize[result])
         message.channel.send(argsEmbed).catch(e => {
         console.log(e)
     })
 } else if (user) {
  let PPEmbed = new Discord.MessageEmbed()
  .setAuthor(user.username, user.displayAvatarURL({ dynamic: true }))
  .setTitle("PP Counter")
  .setColor("#000000")
  .addField(`${user.username}'s pp size:`, penissize[result])
     message.channel.send(PPEmbed).catch(e => {
         console.log(e)
     })
    

 }
    
   }
}