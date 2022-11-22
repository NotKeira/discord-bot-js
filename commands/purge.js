const { EmbedBuilder, SlashCommandBuilder, Colors } = require("discord.js");
const { mcsrv } = require("../botconfig/main.json");
const MongoClient = require("mongodb").MongoClient;
//Import Packages

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("Purge some messages")
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("Choose a number between 1 and ")
        .setRequired(true)
    ),

  async execute(interaction) {
    var amount = interaction.options.getInteger("amount");
    var user = interaction.user.id;

    const noAmount_Embed = new EmbedBuilder()
      .setColor(Colors.Greyple)
      .setTitle(`Error`)
      .setDescription(`Insufficent Amount.`)
      .setTimestamp()
      .setFooter({ text: "Hosted with KiraHQ Tech" });

    const tooMany_Emned = new EmbedBuilder()
      .setColor(Colors.Greyple)
      .setTitle(`Error`)
      .setDescription(`Insufficient Amount. \n(Too Many)`)
      .setTimestamp()
      .setFooter({ text: "Hosted with KiraHQ Tech" });

    const age_Embed = new EmbedBuilder()
      .setColor(Colors.Greyple)
      .setTitle(`Error`)
      .setDescription(`Messages Are Above Age. \n(14+ Days)`)
      .setTimestamp()
      .setFooter({ text: "Hosted with KiraHQ Tech" });

    const successPurge_Embed = new EmbedBuilder()
      .setColor(Colors.Greyple)
      .setTitle(`Success`)
      .setDescription(`Purged ${amount} Messages.`)
      .setTimestamp()
      .setFooter({ text: "Hosted with KiraHQ Tech" });

    if (!amount) return interaction.reply({ embeds: [noAmount_Embed] });
    if (amount > 99 || amount < 1)
      return interaction.reply({ embeds: [tooMany_Emned] });

    interaction.channel.bulkDelete(amount).catch((err) => {
      interaction.reply({ embeds: [age_Embed] });
    });

    let msg = await interaction.reply({
      embeds: [successPurge_Embed],
      fetchReply: true,
    });
    setTimeout(() => {
      msg.delete();
    }, 3000);
    MongoClient.connect(mcsrv, function (err, db) {
      if (err) throw err;
      var dbo = db.db("data");
      var logs = {
        Moderator: `${user}`,
        purged: `${amount}`,
        channel: `${interaction.channel.id}`,
      };
      dbo.collection("purgeLogs").insertOne(logs, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted.");
        db.close();
      });
    });
  },
};
