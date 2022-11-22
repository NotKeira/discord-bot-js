const chalk = require("chalk");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Checks the ping"),
  async execute(interaction) {
    await interaction.reply(`Pong! ${interaction.client.ws.ping}ms.`);
  },
};
