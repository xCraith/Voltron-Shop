import { InteractionHandler } from '@sapphire/framework';
import type { ButtonInteraction } from 'discord.js';
export declare class ButtonHandler extends InteractionHandler {
    constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options);
    parse(interaction: ButtonInteraction): import("@sapphire/result").None | import("@sapphire/result").Option.Some<never>;
    run(interaction: ButtonInteraction): Promise<void>;
}
//# sourceMappingURL=handleTicketButtons.d.ts.map