const Discord = require("discord.js");

const main_json = require("../botconfig/main.json");

module.exports = {
  name: "guildMemberUpdate",
  once: false,
  /**
   *
   * @param {Discord.GuildMember} oldMember
   * @param {Discord.GuildMember} newMember
   */
  async execute(oldMember, newMember) {
    if (!oldMember.pending && newMember) {
      oldMember.send(
        "This server has Member Screening Enabled. Please complete the tasks before you join the server. https://support.discord.com/hc/en-us/articles/1500000466882-Rules-Screening-FAQ"
      );
    }
    if (oldMember.pending && !newMember.pending) {
      console.log(`${newMember.user.tag} just joined the server!`);
    }
  },
};
