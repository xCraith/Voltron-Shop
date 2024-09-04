import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import type { ButtonInteraction } from 'discord.js';
import {
	type TextChannel,
	EmbedBuilder,
	ButtonStyle,
	ButtonBuilder,
	type MessageActionRowComponentBuilder,
	ActionRowBuilder,
	ChannelType
} from 'discord.js';

export class ButtonHandler extends InteractionHandler {
	public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
		super(ctx, {
			...options,
			interactionHandlerType: InteractionHandlerTypes.Button
		});
	}

	public override parse(interaction: ButtonInteraction) {
		if (!interaction.customId.startsWith('open_ticket_')) return this.none();

		return this.some();
	}

	public async run(interaction: ButtonInteraction) {
		await interaction.deferReply({ ephemeral: true });
		const channel = await interaction.client.channels.fetch('1280920903877918846');
		if (channel && channel.isTextBased()) {
			const ticketChannel = channel as TextChannel;
			const productName = interaction.customId.split('open_ticket_')[1];
			const embed = new EmbedBuilder()
				.setTitle(`${productName} - ${interaction.user.username}`)
				.setDescription(
					`Hello ${interaction.user}, \n thank you for your interest in buying one of my products. \n\n Please send your payment to: lg717722@gmail.com per Family and Friends \n **DO TYPE ANYTHING IN THE NOTE SECTION** \n\n After you completed the payment, please send us a proof of purchase so we can send you the product. `
				)
				.setColor('#800080')
				.setFooter({ text: 'Volton Shop' });

			const thread = await ticketChannel.threads.create({
				name: `${productName} - ${interaction.user.username}`,
				reason: 'New Ticket',
				type: ChannelType.PrivateThread
			});
			const msg = await thread.send(`<@&1280920903575797764>`);
			await msg.delete();

			const closeTicketButton = new ButtonBuilder().setCustomId('closeTicket').setLabel('🗑️ Close Ticket').setStyle(ButtonStyle.Danger);

			const TicketRow = new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(closeTicketButton);
			await thread.send({ embeds: [embed], components: [TicketRow] });
			await interaction.followUp({ content: `Your ticket has been created ${thread.url}` });
		}
	}
}
