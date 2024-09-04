"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// Unless explicitly defined, set NODE_ENV as development:
(_a = process.env).NODE_ENV ?? (_a.NODE_ENV = 'development');
const framework_1 = require("@sapphire/framework");
require("@sapphire/plugin-logger/register");
const env_utilities_1 = require("@skyra/env-utilities");
const colorette = __importStar(require("colorette"));
const node_path_1 = require("node:path");
const constants_1 = require("./constants");
// Set default behavior to bulk overwrite
framework_1.ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(framework_1.RegisterBehavior.BulkOverwrite);
// Read env var
(0, env_utilities_1.setup)({ path: (0, node_path_1.join)(constants_1.srcDir, '.env') });
// Enable colorette
colorette.createColors({ useColor: true });
//# sourceMappingURL=setup.js.map