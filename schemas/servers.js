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

var date = new Date();
var time = date.toLocaleString("en-UK");
const { modal, Schema, connect } = require("mongoose");
connect(mcsrv);
const settings = modal(
  "settings",
  new Schema({
    guildID: { type: String, default: "" },
    ownerID: { type: String, default: "" },
    coownerRole: { type: String, default: "" },
    managerRole: { type: String, default: "" },
    adminsRoles: { type: String, default: [] },
    moderatorsRoles: { type: String, default: [] },
    membersRole: { type: String, default: "" },
    mutedRole: { type: String, default: "" },
    auditLogs: { type: String, default: "" },
    doorLogs: { type: String, default: "" },
    staffRole: { type: String, default: "" },

    // use { type: Array, default: [] }, for arrays and you can most likely guess the rest
  })
);
// Settings modal/schema

// Fetching a database entry
const db = await settings.findOne({ guildID: guild.id }); // or { guildID: "id" }
if (!db) return "No database entry"; // You can either return an message saying there is no data or what I do..

if (!db)
  db = await new settings({ guildID: interaction.guild.id })
    .save()
    .catch(() => null); // This creates a new database entry for the server

// then
db.guildID = `${interaction.guild.id}`; // Sets the 'guildID' field to `guild id`
db.ownerID = `${await(interaction.guild.ownerId)}`
await db.save().catch(() => { }); // Saves the new 'entries' to the database
