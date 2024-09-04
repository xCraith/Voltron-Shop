"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTicketNEW = void 0;
const framework_1 = require("@sapphire/framework");
const decorators_1 = require("@sapphire/decorators");
const discord_js_1 = require("discord.js");
const ticket_config_1 = require("../ticket_config");
let startTicketNEW = class startTicketNEW extends framework_1.Command {
    registerApplicationCommands(registry) {
        registry.registerChatInputCommand((command) => {
            command.setName(this.name).setDescription(this.description);
        });
    }
    //
    async chatInputRun(interaction) {
        const channel = (await interaction.client.channels.fetch('1280920903877918846'));
        const productList = ticket_config_1.products.filter((product) => product.isNew);
        if (productList.length === 0) {
            await interaction.reply({ content: 'There are no new products', ephemeral: true });
        }
        for (const product of productList) {
            const embed = new discord_js_1.EmbedBuilder()
                .setTitle(product.name)
                .setColor('#800080')
                .addFields({ name: 'Product Description', value: product.description }, { name: 'Product Preview', value: product.previewLink }, { name: 'Price', value: product.price })
                .setFooter({ text: 'Volton Shop' });
            const button = new discord_js_1.ButtonBuilder().setCustomId(`open_ticket_${product.name}`).setLabel('Buy now!').setStyle(discord_js_1.ButtonStyle.Primary);
            const row = new discord_js_1.ActionRowBuilder().addComponents(button);
            await channel.send({ embeds: [embed], components: [row] });
        }
    }
};
exports.startTicketNEW = startTicketNEW;
exports.startTicketNEW = startTicketNEW = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: 'sendnewtickets',
        description: 'sends new tickets',
        requiredUserPermissions: ['Administrator']
    })
], startTicketNEW);
//# sourceMappingURL=newProductTickets.js.map