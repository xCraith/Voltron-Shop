"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEvent = void 0;
const framework_1 = require("@sapphire/framework");
class UserEvent extends framework_1.Listener {
    async run({ context, message: content }, { message }) {
        // `context: { silent: true }` should make UserError silent:
        // Use cases for this are for example permissions error when running the `eval` command.
        if (Reflect.get(Object(context), 'silent'))
            return;
        return message.reply({ content, allowedMentions: { users: [message.author.id], roles: [] } });
    }
}
exports.UserEvent = UserEvent;
//# sourceMappingURL=messageCommandDenied.js.map