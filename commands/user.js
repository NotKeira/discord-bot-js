const chalk = require("chalk");
const { SlashCommandBuilder } = require("discord.js");

var botStats = "Not Subscribed";
module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with User Info"),
  async execute(interaction) {
    if (interaction.member.id === "801384603704623115") {
      let botStats = "Owner"
    }
      await interaction.reply(
        `**${interaction.user}'s Information**
      Your tag: ${interaction.user.tag}
      Your id: ${interaction.user.id}
      Your Highest Role is: ${interaction.member.roles.highest}
      Your Level: ${botStats}`
      );
  },
};
