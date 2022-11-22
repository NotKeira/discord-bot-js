const {
  Client,
  EmbedBuilder,
  Colors,
  SlashCommandBuilder,
} = require("discord.js");
const chalk = require("chalk");
var MongoClient = require("mongodb").MongoClient;
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("This command bans someone")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Who will you ban?")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Why are you banning them?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const moderator = interaction.author;
    const user = interaction.options.getUser("user");
    const reason = interaction.options.getString("reason");
    const pubChannel = client.channels.cache.get(logChannelPub);
    const privLog = client.channels.cache.get(logChannelPriv);
    const entranceChannel = client.channels.cache.get(etID);

    console.log(
      chalk.yellow(
        `BAN Target: ${target}, BAN Moderator: ${user}, BAN Reason: ${reason}`
      )
    );

    const respond_Embed = new EmbedBuilder()
      .setColor(Colors.DarkGreen)
      .setTitle(`${emoji} | SUCCESS`)
      .setDescription(`${target} Has Been Beamed.`)
      .setTimestamp()
      .setFooter({ text: "Hosted With KiraHQ Tech" });

    const door_Embed = new EmbedBuilder()
      .setColor(Colors.Default)
      .setTitle(`:printer: | BAN`)
      .setDescription(`${target} Was Beamed`)
      .setTimestamp()
      .setFooter({ text: "Hosted With KiraHQ Tech" });

    const banned_Embed = new EmbedBuilder()
      .setColor(Colors.DarkRed)
      .setTitle(`${banem} | You Have Been Banned From ${Guild.name}`)
      .setURL(`${inviteLink}`)
      .setDescription(
        `Moderator: <@${user}>\nReason: ${reason}\nTime:${Date.now()}`
      )
      .setTimestamp()
      .setFooter({ text: "Hosted With KiraHQ Tech" });

    const privateAudit_Embed = new EmbedBuilder()
      .setColor(Colors.Blurple)
      .setTitle(`:page_facing_up: | AUDIT LOGS`)
      .setDescription(`${target} Was Banned From The Server.`)
      .addFields(
        { name: "Moderator:", value: `<@${user}>` },
        { name: "Reason:", value: `${reason}` },
        { name: "Time:", value: `${Date.now()}` }
      )
      .setTimestamp()
      .setFooter({ text: "Hosted With KiraHQ Tech" });

    const publicAudit_Embed = new EmbedBuilder()
      .setColor(Colors.DarkAqua)
      .setTitle(`:page_facing_up: | AUDIT LOGS`)
      .setDescription(`${target} Was Banned From The Server.`)
      .addFields(
        { name: "Moderator:", value: `<@${user}>` },
        { name: "Reason:", value: `${reason}` },
        { name: "Time:", value: `${Date.now()}` }
      )
      .setTimestamp()
      .setFooter({ text: "Hosted With KiraHQ Tech" });

    if (target.id === "801384603704623115")
      return interaction.reply(`You're not banning my creator.`);
    if (target && reason) {
      (await target.send({ embeds: [banned_Embed] }))
        ? console.log("I DMed the target.") &&
          interaction.channel.send("The user was DMed.")
        : console.log("I couldn't DM the target.") &&
          interaction.channel.send("The user could not be DMed.");
      await target
        .ban({
          reason: reason,
        })
        .then(async () => {
          interaction.reply({ embeds: [respond_Embed] });
          logChannelPriv.send({ embeds: [privateAudit_Embed] });
          await logChannelPub
            .send({ embeds: [publicAudit_Embed] })
            .react("👍", "👎");
          entranceChannel.send({ embeds: [door_Embed] });
          MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("data");
            var amountoflogs = 0;
            var logs = {
              type: "Addition",
              moderator: `${user}`,
              target: `${target}`,
              reason: `${reason}`,
              channel: `${interaction.channel.id}`,
            };
            dbo.collection("banLogs").insertOne(logs, function (err, res) {
              if (err) throw err;
              console.log("1 document inserted into Ban Logs.");
            });
            var logs = {
              command: `BAN`,
              moderator: `${user}`,
              target: `${target}`,
              reason: `${reason}`,
              channel: `${interaction.channel.id}`,
            };
            dbo.collection("modLogs").insertOne(logs, function (err, res) {
              if (err) throw err;
              console.log("1 document inserted into Mod Logs.");
              var logs = {
                command: `BAN`,
                moderator: `${user}`,
                target: `${target}`,
                reason: `${reason}`,
                channel: `${interaction.channel.id}`,
                isMod: `${moderators.includes(user.id)}`,
              };
              db.close();
            });
          });
        });
    }
  },
};
