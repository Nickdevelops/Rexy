module.exports = {
    name: "apply",
    permissions: [],
    cooldown: 60,
    async execute(client, message, cmd, args, Discord) {
        const questions = [
            "How old are u",
            "Where are you from",
            "Why are u worthy",
            "Whats gender",
            "Whats your name",
        ];

        let collectCounter = 0;
        let endCounter = 0;
        
        const filter = (m) => m.author.id === message.author.id;

        const appStart = await message.author.send(questions[collectCounter++]);
        const channel = appStart.channel;

        const collector = channel.createMessageCollector(filter);

        collector.on("collect", () =>{
            if (collectCounter < questions.length) {
                channel.send(questions[collectCounter++]);
            } else {
                channel.send("Your application has been sent!");
                collector.stop("fulfilled");

            }
            
        });

        const appsChannel = client.channels.cache.get("854115037525442560")
        collector.on("end", (collected, reason) => {
            if (reason === "fulfilled") {
                let index = 1;
                const mappedResponses = collected
                  .map((msg) => {
                      return `${index++}) ${questions[endCounter++]}\n-> ${msg.content}`;

                  })
                  .join("\n\n")

                appsChannel.send(
                    new Discord.MessageEmbed()
                    .setAuthor(
                        message.author.tag,
                        message.author.displayAvatarURL({ dynamic: true})
                    )
                    .setTitle("New Application!")
                    .setDescription(mappedResponses)
                    .setColor("RANDOM")
                    .setTimestamp()
                );
            }
        })
    }
}