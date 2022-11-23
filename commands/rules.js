const Discord = require("discord.js");
const { SlashCommandBuilder, EmbedBuilder, Colors } = require("discord.js");
const { tickEmoji } = require("../../botconfig/main.json");

module.exports = {
data: new SlashCommandBuilder()
  .setName("rules")
  .setDescription("Send the rules embeds to a channel")
  async execute (interaction) {
    const sName = Guild.name;
    const rulesSecOne_Embed = new EmbedBuilder()
      .setColor(Colors.Green)
      .setTitle(`Discord's Rules`)
      .setDescription(`***Section 1***`)
      .addFields(
        {
          name: "1. Threats and Misconduct",
          value:
            "While this list isn’t definitive, this includes spamming, chaining, slurs, hate speech, harassment & insults.\n- This applies to both text and voice channels.\n- Malicious media is unacceptable, this includes super loud videos, scams, inappropriate sites, epileptic triggers, etc.\n- Actively participating in senseless arguments or flame wars is prohibited.\n- Threatening, harassing, hostility to others, and making others feel discomfort is prohibited.\n- Use of disruptive text is prohibited, (ie. Z̷̀͘a̸̕͠l̸̆͌g̶̃͝ô̵͊)",
        },
        {
          name: "2. All derogatory/offensive language is prohibited.",
          value:
            "- This applies to both text and voice channels.\n- We are here to create a safe community for all of our users, regardless of their background. Remember that most users treat this as an escape.\n- All racial slurs/remarks are prohibited, no matter their use, even in explanation.\n- Harassing any users based on their person, gender, identity or beliefs is outlawed.",
        },
        {
          name: "3. Excessive conversation relating to race, sexuality, religion, politics, & other controversial topics are prohibited.",
          value:
            "- This applies to both text and voice channels.\n- Non-disruptive sensible conversations may be allowed, at staff discretion.\n- Stereotypical behaviour is prohibited.\n- Making fun of sensitive real world/personal events (suicide,terrorism,school shootings, relative passing).",
        },
        {
          name: "4. Any and all NSFW content is prohibited.",
          value:
            "- This applies to both text and voice channels.\n- NSFW profile pictures & or usernames are prohibited.\n- If you have to ask, “is this inappropriate?” the answer will most likely be yes. However, do not be afraid to DM staff for confirmation.\n- NSFW is strictly prohibited even if censored.\n- Inappropriate google documents (i.e. fanfics), and media are prohibited.\n- Inappropriate behavior is prohibited (i.e. sexual harassment)",
        },
        {
          name: "5. Imitation of any and all users is strictly prohibited.",
          value:
            "- This applies to both text and voice channels.\n- This includes Discord staff and users of other communites.",
        },
        {
          name: "LANGUAGES",
          value:
            "- English is the primary language of the server, As such; please only use English.",
        },
        {
          name: "SPARE INFORMATION",
          value:
            "Any Other rules will be posted within our Discord. Remember to check regularly.",
        }
      );
    const rulesSecTwo_Embed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .setTitle(`Discord's Rules`)
      .setDescription(`***Section Two***`)
      .addFields(
        {
          name: "6. Professionalism in on-topic channels..",
          value:
            "- This applies to both text and voice channels.\n- Memeing and extreme immaturity is prohibited.\n- Misuse of channels; not respecting the channel topic.",
        },
        {
          name: "7. Discord Terms of Service (ToS) must be respected at all times.",
          value:
            "- This applies to both text and voice channels.\n- Go to this link to view them --[ToS Link](https://discord.com/ToS) ",
        },
        {
          name: "8. Advertising/Self Promotion is strictly prohibited.",
          value:
            "- This applies to both text and voice channels.\n- Do not post links to any other DIscord servers besides ones strictly relating to this community. DM a staff member if there is any confusion.\n- Using the discord to advertise in DMs is prohibited.",
        },
        {
          name: "9. General rules of thumb.",
          value:
            "- This applies to both text and voice channels.\n- Leaking information that is considered classified or prohibited.\n- Intentionally sharing stolen content of anyones development is strictly prohibited.\n- Evasion of punishment and blatant disregard for moderation warnings.\n- Committing any illegal activity that would be considered breaking the law.\nSpoilers for any movie/tv show/game, etc must use the spoiler tag and be clearly labeled as a spoiler.\n- This applies to both text and voice channels.\n- Since the release of content, our policy is . . .\n0 to 3 months -- Prohibited, do not post.\n3 to 12 months -- You can post, but you must mark it as a spoiler and state what media you are spoiling.\n12 months or more -- You may spoil, but it is courteous to give a fair warning beforehand\nExample of a properly marked spoiler.\n\n“Halo Reach spoiler: ||Kat dies||”",
        },
        {
          name: "10. Please be courteous when you ping users.",
          value:
            "- Pinging a user for no reason when that user has asked you not to do so is prohibited.\n- Pinging a Mod+ without a good reason will result in a mute, warn, or both.\n- Pinging Managers+ without permission will lead to a mute.\n- Ping spamming will result in an immediate ban.",
        }
      );
    const rulesMiscellaneous_Embed = new EmbedBuilder()
      .setColor(Colors.Red)
      .setTitle(`Miscellaneous Information`)
      .setDescription(
        `The typical moderation tree progresses as such: mute -> warn (x3) -> ban.\nSteps may be skipped based on the severity of the infraction.`
      )
      .addFields({
        name: "Moderation verdict and rule interpretation is at staff discretion to maintain a safe community for any and all users.",
        value:
          "If you see a user actively breaking the rules, it is encouraged that you tell a moderator.",
      })
      .setTimestamp()
      .setFooter({ text: "Hosted by KiraHQ" });

    (
      await interaction.channel.send( {
          embeds: [
            rulesSecOne_Embed,
            rulesSecTwo_Embed,
            rulesMiscellaneous_Embed,
          ],
        }
      )
    ).react(tick);
    interaction.channel.send(`@everyone ***Please read the above embeds and react to the emoji when you understand the rules.***`);
  },
};
