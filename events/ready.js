const chalk = require("chalk");
const { version: discordjsVersion, ActivityType } = require("discord.js");
const main_json = require("../botconfig/main.json");
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`Logged in as ${client.user.tag}`);
    console.log(
      chalk.greenBright("The bot is up and running, no errors so far."),
      chalk.grey("\n"),
      chalk.blueBright(client.ws.ping),
      chalk.grey("\n"),
      chalk.blueBright(
        discordjsVersion,
        process.version,
        process.platform,
        process.arch
      ),
      chalk.grey("\n"),
      chalk.yellow((process.memoryUsage().rss / 1024 / 1024).toFixed(2)),
      chalk.grey("\n"),
      chalk.yellowBright(
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
      )
    );
    client.user.setActivity(
      `OVER ${client.guilds.cache.get(main_json.guildID).size} MEMBERS`,
      {
        type: ActivityType.Watching,
      }
    );
  },
};
