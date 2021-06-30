module.exports = {
    name: 'stop',
    aliases: ['s'],
    permissions: [],
    descrption: "Stop Command!",
    async execute(client, message, cmd, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        
       client.player.stop(message);
    }
}