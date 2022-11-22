const chalk = require("chalk");
const {
  SlashCommandBuilder,
  version: discordjsVersion,
  EmbedBuilder,
  Colors,
} = require("discord.js");
const { pubLog, privLog, etID } = require("../botconfig/main.json");
const main_json = require("../botconfig/main.json");
var MongoClient = require("mongodb").MongoClient;
var url = main_json.MONGODBSRV;
const emoji = main_json.tickEmoji;
module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("This Command Kicks a user.")
    .addUserOption((option) =>
      option.setName("user").setDescription("Who are you kicking?")
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Why are you kicking this person?")
    ),
  async execute(interaction) {
    const user = interaction.member;

    const target = interaction.options.getMember("user");

    const reason = interaction.options.getString("reason");

    const pubChannel = interaction.client.channels.cache.get(pubLog);

    const privChannel = interaction.client.channels.cache.get(privLog);

    const entranceChannel = interaction.client.channels.cache.get(etID);

    const date = new Date();

    const time = date.toLocaleString("en-UK");

    const WaitKick_Embed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .setTitle(`:x: | ERROR`)
      .setDescription(`Insufficient Arguments. `)
      .setTimestamp()
      .setFooter({ text: "Hosted With KiraHQ Tech" });

    const successKick_Embed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .setTitle(`${emoji} | SUCCESS`)
      .setDescription(`User has been kicked`)
      .setTimestamp()
      .setFooter({ text: "Hosted With KiraHQ Tech" });

    const kicked_Embed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .setTitle(`Kicked!`)
      .setDescription(
        `You have been kicked from **${interaction.guild.name}** for: ${reason}.`
      )
      .setTimestamp()
      .setFooter({ text: "Hosted With KiraHQ Tech" });
    if (user && reason) {
      target.send({ embeds: [kicked_Embed] });
      await target.kick(reason).then(() => {
        interaction.reply({ embeds: [successKick_Embed] });

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
          dbo.collection("kickLogs").insertOne(logs, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted into Kick Logs.");
          });
          var logs = {
            command: `KICK`,
            moderator: `${user}`,
            target: `${target}`,
            reason: `${reason}`,
            channel: `${interaction.channel.id}`,
          };
          dbo.collection("modLogs").insertOne(logs, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted into Mod Logs.");
            db.close();
          });
        });
      });
    } else {
      interaction.reply("cant find the user!");
    }
  },
};
