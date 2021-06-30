module.exports = {
  name: "ticket",
  aliases: [],
  permissions: [],
  category: "moderation",
  description: "Ticket Command",
  async execute(client, message, cmd, args, Discord) {
  
    const channel = '858816020562575360';
    const TicketEmoji = '🎟️';
    const StaffReportEMoji = '🔰'
    const MemberReportEmoji = '🔴'
    const BanAppealEmoji = '⛔'
    const JobBugEmomoji = '💼'
    const ServerBugEmoji = '❗'
    const DonateEmoji = '💸'
    if(message.member.permissions.has("ADMINISTRATOR")) {
    let embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTitle('TICKET')
    
    .setDescription('Κάνε react στο :tickets: για να ανοίξεις ένα ticket!\n\n\
    Κάνε react στο :beginner: για Staff Report\n\n\
    Κάνε react στο :red_circle: για Member Report\n\n\
    Κάνε react στο :no_entry: για Ban Appeal\n\n\
    Κάνε react στο :briefcase: για Job Bug\n\n\
    Κάνε react στο :exclamation: για Server Bug\n\n\
    Kάνε react στο :money_with_wings: για donate ')

    let TicketEmbed = await message.channel.send(embed);
    TicketEmbed.react(TicketEmoji)
    TicketEmbed.react(StaffReportEMoji)
    TicketEmbed.react(MemberReportEmoji)
    TicketEmbed.react(BanAppealEmoji)
    TicketEmbed.react(JobBugEmomoji)
    TicketEmbed.react(ServerBugEmoji)
    TicketEmbed.react(DonateEmoji)
    } else {
      message.reply('You dont have permissions to write this command')
    }
    client.on('messageReactionAdd', async (reaction, user) => {

    
    if (reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch()
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === DonateEmoji) {

        const channel = await message.guild.channels.create(`Donate: ${user.tag}`);
    
        channel.setParent("854100828536438794");
    
        channel.updateOverwrite(message.guild.id, {
          SEND_MESSAGE: false,
          VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
          SEND_MESSAGE: true,
          VIEW_CHANNEL: true,
        });
        const Embedd = new Discord.MessageEmbed()
        .setDescription("Thank you for contacting support!")
        .setColor("RANDOM")
        const reactionMessage = await channel.send(Embedd);
    
        try {
          await reactionMessage.react("🔒");
          await reactionMessage.react("⛔");
        } catch (err) {
          channel.send("Error sending emojis!");
          throw err;
        }
    
        const collector = reactionMessage.createReactionCollector(
         (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
          { dispose: true }
        );
    
        collector.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
            case "🔒":
              channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
              break;
            case "⛔":
              channel.send("Deleting this channel in 5 seconds!");
             setTimeout(() => channel.delete(), 5000);
              break;
          }
        });
    
    
        message.channel
          .send(`We will be right with you! ${channel}`)
          .then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
          })
          .catch((err) => {
            throw err;
          });
        }
      }

    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === ServerBugEmoji) {

        const channel = await message.guild.channels.create(`Server Bug: ${user.tag}`);
    
        channel.setParent("854100828536438794");
    
        channel.updateOverwrite(message.guild.id, {
          SEND_MESSAGE: false,
          VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
          SEND_MESSAGE: true,
          VIEW_CHANNEL: true,
        });
        const Embedd = new Discord.MessageEmbed()
        .setDescription("Thank you for contacting support!")
        .setColor("RANDOM")
        const reactionMessage = await channel.send(Embedd);
    
        try {
          await reactionMessage.react("🔒");
          await reactionMessage.react("⛔");
        } catch (err) {
          channel.send("Error sending emojis!");
          throw err;
        }
    
        const collector = reactionMessage.createReactionCollector(
         (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
          { dispose: true }
        );
    
        collector.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
            case "🔒":
              channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
              break;
            case "⛔":
              channel.send("Deleting this channel in 5 seconds!");
             setTimeout(() => channel.delete(), 5000);
              break;
          }
        });
    
    
        message.channel
          .send(`We will be right with you! ${channel}`)
          .then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
          })
          .catch((err) => {
            throw err;
          });
        }
      }


    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === JobBugEmomoji) {

        const channel = await message.guild.channels.create(`Job Bug: ${user.tag}`);
    
        channel.setParent("854100828536438794");
    
        channel.updateOverwrite(message.guild.id, {
          SEND_MESSAGE: false,
          VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
          SEND_MESSAGE: true,
          VIEW_CHANNEL: true,
        });
        const Embedd = new Discord.MessageEmbed()
        .setDescription("Thank you for contacting support!")
        .setColor("RANDOM")
        const reactionMessage = await channel.send(Embedd);
    
        try {
          await reactionMessage.react("🔒");
          await reactionMessage.react("⛔");
        } catch (err) {
          channel.send("Error sending emojis!");
          throw err;
        }
    
        const collector = reactionMessage.createReactionCollector(
         (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
          { dispose: true }
        );
    
        collector.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
            case "🔒":
              channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
              break;
            case "⛔":
              channel.send("Deleting this channel in 5 seconds!");
             setTimeout(() => channel.delete(), 5000);
              break;
          }
        });
    
    
        message.channel
          .send(`We will be right with you! ${channel}`)
          .then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
          })
          .catch((err) => {
            throw err;
          });
        }
      }


    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === BanAppealEmoji) {

        const channel = await message.guild.channels.create(`Ban Appeal: ${user.tag}`);
    
        channel.setParent("854100828536438794");
    
        channel.updateOverwrite(message.guild.id, {
          SEND_MESSAGE: false,
          VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
          SEND_MESSAGE: true,
          VIEW_CHANNEL: true,
        });
        const Embedd = new Discord.MessageEmbed()
        .setDescription("Thank you for contacting support!")
        .setColor("RANDOM")
        const reactionMessage = await channel.send(Embedd);
    
        try {
          await reactionMessage.react("🔒");
          await reactionMessage.react("⛔");
        } catch (err) {
          channel.send("Error sending emojis!");
          throw err;
        }
    
        const collector = reactionMessage.createReactionCollector(
         (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
          { dispose: true }
        );
    
        collector.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
            case "🔒":
              channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
              break;
            case "⛔":
              channel.send("Deleting this channel in 5 seconds!");
             setTimeout(() => channel.delete(), 5000);
              break;
          }
        });
    
    
        message.channel
          .send(`We will be right with you! ${channel}`)
          .then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
          })
          .catch((err) => {
            throw err;
          });
        }
      }


    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === MemberReportEmoji) {

        const channel = await message.guild.channels.create(`Member Report: ${user.tag}`);
    
        channel.setParent("854100828536438794");
    
        channel.updateOverwrite(message.guild.id, {
          SEND_MESSAGE: false,
          VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
          SEND_MESSAGE: true,
          VIEW_CHANNEL: true,
        });
        const Embedd = new Discord.MessageEmbed()
        .setDescription("Thank you for contacting support!")
        .setColor("RANDOM")
        const reactionMessage = await channel.send(Embedd);
    
        try {
          await reactionMessage.react("🔒");
          await reactionMessage.react("⛔");
        } catch (err) {
          channel.send("Error sending emojis!");
          throw err;
        }
    
        const collector = reactionMessage.createReactionCollector(
         (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
          { dispose: true }
        );
    
        collector.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
            case "🔒":
              channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
              break;
            case "⛔":
              channel.send("Deleting this channel in 5 seconds!");
             setTimeout(() => channel.delete(), 5000);
              break;
          }
        });
    
    
        message.channel
          .send(`We will be right with you! ${channel}`)
          .then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
          })
          .catch((err) => {
            throw err;
          });
        }
      }

    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === StaffReportEMoji){

        const channel = await message.guild.channels.create(`StaffReport: ${user.tag}`);
    
        channel.setParent("854100828536438794");
    
        channel.updateOverwrite(message.guild.id, {
          SEND_MESSAGE: false,
          VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
          SEND_MESSAGE: true,
          VIEW_CHANNEL: true,
        });
        const Embedd = new Discord.MessageEmbed()
        .setDescription("Thank you for contacting support!")
        .setColor("RANDOM")
        const reactionMessage = await channel.send(Embedd);
    
        try {
          await reactionMessage.react("🔒");
          await reactionMessage.react("⛔");
        } catch (err) {
          channel.send("Error sending emojis!");
          throw err;
        }
    
        const collector = reactionMessage.createReactionCollector(
         (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
          { dispose: true }
        );
    
        collector.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
            case "🔒":
              channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
              break;
            case "⛔":
              channel.send("Deleting this channel in 5 seconds!");
             setTimeout(() => channel.delete(), 5000);
              break;
          }
        });
    
    
        message.channel
          .send(`We will be right with you! ${channel}`)
          .then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
          })
          .catch((err) => {
            throw err;
          });
        }
      }
    


    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === TicketEmoji) {

    const channel = await message.guild.channels.create(`ticket: ${user.tag}`);
    
    channel.setParent("854100828536438794");

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });
    const Embedd = new Discord.MessageEmbed()
    .setDescription("Thank you for contacting support!")
    .setColor("RANDOM")
    const reactionMessage = await channel.send(Embedd);

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
     (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send("Deleting this channel in 5 seconds!");
         setTimeout(() => channel.delete(), 5000);
          break;
      }
    });


    message.channel
      .send(`We will be right with you! ${channel}`)
      .then((msg) => {
        setTimeout(() => msg.delete(), 7000);
        setTimeout(() => message.delete(), 3000);
      })
      .catch((err) => {
        throw err;
      });
    }
  }
})
  
  }
};
