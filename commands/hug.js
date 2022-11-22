const chalk = require("chalk");
const { SlashCommandBuilder } = require("discord.js");
const main_json = require("../botconfig/main.json");
const Tenor = require("tenorjs").client({
  Key: main_json.TenorAPI, // https://tenor.com/developer/keyregistration
  Filter: "off", // "off", "low", "medium", "high", not case sensitive
  Locale: "en_UK", // Your locale here, case-sensitivity depends on input
  MediaFilter: "minimal", // either minimal or basic, not case sensitive
  DateFormat: "DD/MM/YYYY - H:mm:ss A", // Change this accordingly
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hug")
    .setDescription("Hug someone")
    .addUserOption((option) =>
      option.setName("user").setDescription("the person you're hugging")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    Tenor.Search.Query("hug", "10")
      .then((Results) => {
        var totalResponses = Results.length;
        var responseIndex = Math.floor(Math.random() * 10 + 1) % totalResponses;
        var responseFinal = Results[responseIndex];
        interaction.reply(responseFinal.itemurl) &&
          interaction.channel.send(`${interaction.member} hugs ${user}`);
      })
      .catch(console.error);
  },
};
