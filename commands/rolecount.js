const { EmbedBuilder, Colors, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("count")
    .setDescription("Count the amount of people in a role")
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("What role are you counting")
        .setRequired(true)
    ),
  async execute(interaction) {
    let role = interaction.options.getRole("role").id;
    let membersWithRole = interaction.guild.roles.cache.get(role).members;
    let roleName = interaction.guild.roles.cache.get(role).name;
    const successRankCountEmbed = new EmbedBuilder()
      .setColor(Colors.DarkGreen)
      .setTitle(`Rank Count Results`)
      .setDescription(
        `There are ${membersWithRole.size} people in the role **${roleName}**`
      )
      .setTimestamp()
      .setFooter({ text: "Hosted with KiraHQ" });
    const failedCountEmbed = new EmbedBuilder()
      .setColor(Colors.Red)
      .setTitle(`:x: Failed!`)
      .setDescription(
        `Could not gather the amount of people in that role as it either does not exist, or is unavailable for me to check.`
      )
      .setTimestamp()
      .setFooter({ text: "Hosted with KiraHQ" });
    const noMemberEmbed = new EmbedBuilder()
      .setColor(Colors.DarkRed)
      .setTitle(`:grimacing: Failed!`)
      .setDescription(
        `Yikes! Looks like there's no-one in that role.. So the size of the role is 0...`
      )
      .setTimestamp()
      .setFooter({ text: "Hosted with KiraHQ" });

    console.log(`Logged ${membersWithRole.size} members with that role.`);
    if (membersWithRole.size === 0)
      return interaction.reply({ embeds: [noMemberEmbed] });
    else if (membersWithRole.size >= 1)
      return interaction.reply({ embeds: [successRankCountEmbed] });
  },
};
