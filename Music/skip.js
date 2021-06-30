module.exports = {
    name: 'skip',
    aliases: [],
    permissions: [],
    descrption: "Play Command!",
    async execute(client, message, cmd, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        
        client.player.skip(message)
    }
}