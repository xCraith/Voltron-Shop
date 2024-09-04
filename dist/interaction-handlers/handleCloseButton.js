"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonHandler = void 0;
const framework_1 = require("@sapphire/framework");
const decorators_1 = require("@sapphire/decorators");
const utils_1 = require("../lib/utils");
let ButtonHandler = class ButtonHandler extends framework_1.InteractionHandler {
    parse(interaction) {
        if (interaction.customId !== 'closeTicket')
            return this.none();
        return this.some();
    }
    async run(interaction) {
        const channel = interaction.channel;
        await interaction.reply({ content: 'Ticket has been closed' });
        await (0, utils_1.sendTicketLog)(channel.url, channel.name);
        if (channel?.isThread()) {
            await channel.setArchived(true);
        }
    }
};
ButtonHandler = __decorate([
    (0, decorators_1.ApplyOptions)({
        interactionHandlerType: framework_1.InteractionHandlerTypes.Button
    })
], ButtonHandler);
exports.ButtonHandler = ButtonHandler;
//# sourceMappingURL=handleCloseButton.js.map