const chalk = require("chalk");
const { SlashCommandBuilder } = require("discord.js");
const main_json = require("../botconfig/main.json");
const { QOTDs } = require("../botconfig/massTexts.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("qotd")
    .setDescription("Get sent a QOTD to use."),
  async execute(interaction) {
    interaction.reply(`${QOTDs[Math.floor(Math.random() * QOTDs.length)]}`);
  },
};
