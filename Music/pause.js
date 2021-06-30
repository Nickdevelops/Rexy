module.exports = {
    name: 'pause',
    aliases: [],
    permissions: [],
    descrption: "Pause Command!",
    async execute(client, message, cmd, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        
        client.player.pause(message)
        
    }
}