const chalk = require("chalk");
const {
  Client,
  GuildMember,
  Guild,
  GuildMemberManager,
} = require("discord.js");

const client = require("../index.js");

const main_json = require("../botconfig/main.json");

const mcsrv = main_json.mcsrv;

const MongoClient = require("mongodb").MongoClient;

module.exports = {
  name: "guildMemberRemove",
  execute(GuildMember) {
    // const oldMember = GuildMember.oldMember;
    // const newMember = GuildMember.newMember;
    // if (oldMember.pending && !newMember.pending) {
    //   oldMember.send("This server has Member Screening enabled. Please pass it before you can gain access to this server.")
    // }
    const server = GuildMember.guild;
    const memberRole = server.roles.cache.get(main_json.memberRole);
    const jLogs = server.channels.cache.get(main_json.auditlogs);
    const jChannel = server.channels.cache.get(main_json.welcomechannel);
    const lLojs = server.channels.cache.get(main_json.auditlogs);
    console.log(`${GuildMember},${GuildMember.user.username} left the server.`);
    GuildMember.roles.add(memberRole, "New Member");
    jChannel.send(
      `Well that's disappointing.. ${GuildMember.user.username} left the server :(.`
    );
    jLogs.send(`
    ${GuildMember} has left the server.

    Information:

    User ID: ${GuildMember.id},
    User Tag: ${GuildMember.user.tag}
    `);
  },
};
