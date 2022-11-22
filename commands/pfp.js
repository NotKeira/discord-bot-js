const chalk = require("chalk");
const { SlashCommandBuilder } = require("discord.js");
const main_json = require("../botconfig/main.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pfp")
    .setDescription("Grab someones pfp")
    .addUserOption((option) =>
      option.setName("user").setDescription("the person's pfp ur grabbing")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");

    interaction.reply(
      `${user.avatarURL((dynamic = true))}`
    );
  },
};
