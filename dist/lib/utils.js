"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTicketLog = exports.getSuccessLoggerData = exports.logSuccessCommand = void 0;
const framework_1 = require("@sapphire/framework");
const colorette_1 = require("colorette");
const discord_js_1 = require("discord.js");
const __1 = require("..");
function logSuccessCommand(payload) {
    let successLoggerData;
    if ('interaction' in payload) {
        successLoggerData = getSuccessLoggerData(payload.interaction.guild, payload.interaction.user, payload.command);
    }
    else {
        successLoggerData = getSuccessLoggerData(payload.message.guild, payload.message.author, payload.command);
    }
    framework_1.container.logger.debug(`${successLoggerData.shard} - ${successLoggerData.commandName} ${successLoggerData.author} ${successLoggerData.sentAt}`);
}
exports.logSuccessCommand = logSuccessCommand;
function getSuccessLoggerData(guild, user, command) {
    const shard = getShardInfo(guild?.shardId ?? 0);
    const commandName = getCommandInfo(command);
    const author = getAuthorInfo(user);
    const sentAt = getGuildInfo(guild);
    return { shard, commandName, author, sentAt };
}
exports.getSuccessLoggerData = getSuccessLoggerData;
function getShardInfo(id) {
    return `[${(0, colorette_1.cyan)(id.toString())}]`;
}
function getCommandInfo(command) {
    return (0, colorette_1.cyan)(command.name);
}
function getAuthorInfo(author) {
    return `${author.username}[${(0, colorette_1.cyan)(author.id)}]`;
}
function getGuildInfo(guild) {
    if (guild === null)
        return 'Direct Messages';
    return `${guild.name}[${(0, colorette_1.cyan)(guild.id)}]`;
}
async function sendTicketLog(channelURL, product) {
    const ticketLog = (await __1.client.channels.fetch('1280920904225787904'));
    const embed = new discord_js_1.EmbedBuilder()
        .setTitle(`Ticket: ${product}`)
        .setColor('#800080')
        .addFields({
        name: `Ticket Name`,
        value: `${product}}`,
        inline: true
    }, {
        name: `Ticket URL`,
        value: `[Click me!](${channelURL})`,
        inline: false
    })
        .setTimestamp()
        .setFooter({ text: 'NK-Community' });
    await ticketLog.send({ embeds: [embed] });
}
exports.sendTicketLog = sendTicketLog;
//# sourceMappingURL=utils.js.map