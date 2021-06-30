module.exports = {
    name: 'play',
    aliases: ['p'],
    permissions: [],
    descrption: "Play Command!",
    async execute(client, message, cmd, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        
        let search = args.join(" ");

        if(!search) return message.channel.send('Please provide a search query!');

        client.player.play(message, search)
    }
}