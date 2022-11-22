const chalk = require("chalk");
const {
  SlashCommandBuilder,
  version: discordjsVersion,
} = require("discord.js");
const { resolve } = require("path");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("bot")
    .setDescription("Replies with bot info"),
  async execute(interaction) {
    async function getCmds() {
      (await interaction.guild.commands.fetch()).size;
    }

    await interaction.reply(
      `**${interaction.client.name}'s Data** 
      I  am running on Discord.JS Version **${discordjsVersion}**
      I use Node Version **${process.version}**
      My Platform is **${process.platform}**
      I run on Architecture **${process.arch}**
      I have reserved **${(process.memoryUsage().rss / 1024 / 1024).toFixed(
        2
      )}** Megabytes of Memory
      I have used **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )}** Megabytes of Memory
      I am in **${interaction.client.guilds.cache.size}** Servers globally
      This server has **${await interaction.client.commands
        .size} commands** available`
    );
  },
};
