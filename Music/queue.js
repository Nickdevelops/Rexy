module.exports = {
    name: 'queue',
    aliases: [],
    permissions: [],
    descrption: "Queue Command!",
    async execute(client, message, cmd, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        
        let queue = client.player.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }
}