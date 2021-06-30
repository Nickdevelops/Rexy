module.exports = {
    name: 'loop',
    aliases: [],
    permissions: [],
    descrption: "Loop Command!",
    async execute(client, message, cmd, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        
        let mode = client.player.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
        message.channel.send("Set repeat mode to `" + mode + "`");
    }
};