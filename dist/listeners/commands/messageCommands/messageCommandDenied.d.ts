import type { Events, MessageCommandDeniedPayload } from '@sapphire/framework';
import { Listener, type UserError } from '@sapphire/framework';
export declare class UserEvent extends Listener<typeof Events.MessageCommandDenied> {
    run({ context, message: content }: UserError, { message }: MessageCommandDeniedPayload): Promise<(import("discord.js").Message<boolean> & {
        channel: import("discord.js").DMChannel | import("discord.js").PartialDMChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | import("discord.js").TextChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").PrivateThreadChannel | import("discord.js").VoiceChannel;
    }) | undefined>;
}
//# sourceMappingURL=messageCommandDenied.d.ts.map