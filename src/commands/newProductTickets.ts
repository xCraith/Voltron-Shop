import { Command, type ApplicationCommandRegistry } from '@sapphire/framework';
import { type ChatInputCommandInteraction } from 'discord.js';
import { ApplyOptions } from '@sapphire/decorators';
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, TextChannel, ButtonStyle } from 'discord.js';
import { products } from '../ticket_config';

@ApplyOptions<Command.Options>({
	name: 'sendnewtickets',
	description: 'sends new tickets',
	requiredUserPermissions: ['Administrator']
})
export class startTicketNEW extends Command {
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand((command) => {
			command.setName(this.name).setDescription(this.description);
		});
	}

	public override async chatInputRun(interaction: ChatInputCommandInteraction) {
		const channel = (await interaction.client.channels.fetch('1280920903877918846')) as TextChannel;
		const productList = products.filter((product) => product.isNew);

		if (productList.length === 0) {
			await interaction.reply({ content: 'There are no new products', ephemeral: true });
		}

		for (const product of productList) {
			const embed = new EmbedBuilder()
				.setTitle(product.name)
				.setColor('#800080')
				.addFields(
					{ name: 'Product Description', value: product.description },
					{ name: 'Product Preview', value: product.previewLink },
					{ name: 'Price', value: product.price }
				)
				.setFooter({ text: 'Volton Shop' });

			const button = new ButtonBuilder().setCustomId(`open_ticket_${product.name}`).setLabel('Buy now!').setStyle(ButtonStyle.Primary);

			const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

			await channel.send({ embeds: [embed], components: [row] });
		}
	}
}
