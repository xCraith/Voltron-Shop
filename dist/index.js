"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
require("./lib/setup");
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
exports.client = new framework_1.SapphireClient({
    defaultPrefix: '!',
    caseInsensitiveCommands: true,
    logger: {
        level: framework_1.LogLevel.Debug
    },
    intents: [discord_js_1.GatewayIntentBits.DirectMessages, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.MessageContent],
    loadMessageCommandListeners: true
});
const main = async () => {
    try {
        exports.client.logger.info('Logging in');
        await exports.client.login();
        exports.client.logger.info('logged in');
    }
    catch (error) {
        exports.client.logger.fatal(error);
        await exports.client.destroy();
        process.exit(1);
    }
};
void main();
//# sourceMappingURL=index.js.map