import { type ChatInputCommandSuccessPayload, type Command, type ContextMenuCommandSuccessPayload, type MessageCommandSuccessPayload } from '@sapphire/framework';
import type { Guild, User } from 'discord.js';
export declare function logSuccessCommand(payload: ContextMenuCommandSuccessPayload | ChatInputCommandSuccessPayload | MessageCommandSuccessPayload): void;
export declare function getSuccessLoggerData(guild: Guild | null, user: User, command: Command): {
    shard: string;
    commandName: string;
    author: string;
    sentAt: string;
};
export declare function sendTicketLog(channelURL: string, product: string): Promise<void>;
//# sourceMappingURL=utils.d.ts.map