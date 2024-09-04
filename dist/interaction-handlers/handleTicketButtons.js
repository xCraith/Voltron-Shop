"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonHandler = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
class ButtonHandler extends framework_1.InteractionHandler {
    constructor(ctx, options) {
        super(ctx, {
            ...options,
            interactionHandlerType: framework_1.InteractionHandlerTypes.Button
        });
    }
    parse(interaction) {
        if (!interaction.customId.startsWith('open_ticket_'))
            return this.none();
        return this.some();
    }
    async run(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const channel = await interaction.client.channels.fetch('1280920903877918846');
        if (channel && channel.isTextBased()) {
            const ticketChannel = channel;
            const productName = interaction.customId.split('open_ticket_')[1];
            const embed = new discord_js_1.EmbedBuilder()
                .setTitle(`${productName} - ${interaction.user.username}`)
                .setDescription(`Hello ${interaction.user}, \n thank you for your interest in buying one of my products. \n\n Please send your payment to: lg717722@gmail.com per Family and Friends \n **DO TYPE ANYTHING IN THE NOTE SECTION** \n\n After you completed the payment, please send us a proof of purchase so we can send you the product. `)
                .setColor('#800080')
                .setFooter({ text: 'Volton Shop' });
            const thread = await ticketChannel.threads.create({
                name: `${productName} - ${interaction.user.username}`,
                reason: 'New Ticket',
                type: discord_js_1.ChannelType.PrivateThread
            });
            const msg = await thread.send(`<@&1280920903575797764>`);
            await msg.delete();
            const closeTicketButton = new discord_js_1.ButtonBuilder().setCustomId('closeTicket').setLabel('🗑️ Close Ticket').setStyle(discord_js_1.ButtonStyle.Danger);
            const TicketRow = new discord_js_1.ActionRowBuilder().addComponents(closeTicketButton);
            await thread.send({ embeds: [embed], components: [TicketRow] });
            await interaction.followUp({ content: `Your ticket has been created ${thread.url}` });
        }
    }
}
exports.ButtonHandler = ButtonHandler;
//# sourceMappingURL=handleTicketButtons.js.map