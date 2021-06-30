module.exports = {
    name: 'warn',
    permissions: ["ADMINISTRATOR"],
    category: "moderation",
    description: 'Warns a member!',
    async execute(client, message, cmd, args, Discord) {




    var embedColor = '#FF0000' // Change this to change the color of the embeds!

    

    var missingPermissionsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the user is missing permissions

        .setColor(embedColor)

        .setAuthor(message.author.username, message.author.avatarURL)

        .setTitle('Insufficient Permissions!')

        .setDescription('You need the MANAGE_MESSAGES permission to use this command!')

        .setTimestamp();

    var missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right

        .setColor(embedColor)

        .setAuthor(message.author.username, message.author.avatarURL)

        .setTitle('Thats Not How It Works Boi')

        .setDescription('Usage: d.warn [@User] [Reason]')

        .setTimestamp();

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); // Checks if the user has the permission

    let mentioned = message.mentions.users.first(); // Gets the user mentioned! message.guild.channels.find(x => x.name === d-logs)

    if(!mentioned) return message.channel.send(missingArgsEmbed); // Triggers if the user donsn't tag a user in the message

    let reason = args.slice(1).join(' ') // .slice(1) removes the user mention, .join(' ') joins all the words in the message, instead of just sending 1 word

    if(!reason) return message.channe.send(missingArgsEmbed); // Triggers if the user dosn't provide a reason for the warning

    var warningEmbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!

        .setColor(embedColor)

        .setAuthor(message.author.username, message.author.avatarURL)

        .setTitle(`Youve been warned in ${message.guild.name}`)

        .addField('Warned by', message.author.tag)

        .addField('Reason', reason)

        .setTimestamp();

  mentioned.send(warningEmbed); // DMs the user the above embed!

    var warnSuccessfulEmbed = new Discord.MessageEmbed() // Creates the embed thats returned to the person warning if its sent.

        .setColor(embedColor)

        .setTitle('User Successfully Warned!');

    message.channel.send(warnSuccessfulEmbed); // Sends the warn successful embed

    message.delete(); // Deletes the command
    }
}
