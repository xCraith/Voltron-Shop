import { InteractionHandler } from '@sapphire/framework';
import { ButtonInteraction } from 'discord.js';
export declare class ButtonHandler extends InteractionHandler {
    parse(interaction: ButtonInteraction): import("@sapphire/result").None | import("@sapphire/result").Option.Some<never>;
    run(interaction: ButtonInteraction): Promise<void>;
}
//# sourceMappingURL=handleCloseButton.d.ts.map