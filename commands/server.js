const chalk = require("chalk");
const { SlashCommandBuilder } = require("discord.js");
let serverStatus = "Not subscribed.";
module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info"),
  async execute(interaction) {
    let ig = interaction.guild;
    const gOwner = await interaction.guild.fetchOwner();
    const date = Date.now();
    await interaction.reply(
      `
      **Server Information**

      Server name: ${ig.name}

      Server ID: ${ig.id}

      Server Owner: ${gOwner.user.tag}
      
      Total members: ${ig.memberCount}
      
      Maximum Members: ${ig.maximumMembers}

      Server Created At: ${interaction.guild.createdAt}

      `
    );
  },
};
