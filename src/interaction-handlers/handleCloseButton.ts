import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import { ButtonInteraction, ThreadChannel } from 'discord.js';
import { ApplyOptions } from '@sapphire/decorators';
import { sendTicketLog } from '../lib/utils';

@ApplyOptions<InteractionHandler.Options>({
	interactionHandlerType: InteractionHandlerTypes.Button
})
export class ButtonHandler extends InteractionHandler {
	public override parse(interaction: ButtonInteraction) {
		if (interaction.customId !== 'closeTicket') return this.none();

		return this.some();
	}

	public async run(interaction: ButtonInteraction) {
		const channel = interaction.channel as ThreadChannel;

		await interaction.reply({ content: 'Ticket has been closed' });
		await sendTicketLog(channel!.url, channel!.name);
		if (channel?.isThread()) {
			await channel.setArchived(true);
		}
	}
}
