"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginOptionSchema = exports.DEFAULT_OPTIONS = void 0;
const utils_validation_1 = require("@docusaurus/utils-validation");
exports.DEFAULT_OPTIONS = {
    layout: {},
    debug: false,
};
exports.PluginOptionSchema = utils_validation_1.Joi.object({
    id: utils_validation_1.Joi.string(),
    spec: utils_validation_1.Joi.string(),
    url: utils_validation_1.Joi.string().uri({ allowRelative: true }).optional(),
    layout: utils_validation_1.Joi.any().default(exports.DEFAULT_OPTIONS.layout),
    debug: utils_validation_1.Joi.boolean().default(exports.DEFAULT_OPTIONS.debug),
    route: utils_validation_1.Joi.string().uri({ relativeOnly: true }).optional(),
    config: utils_validation_1.Joi.any().optional(),
    themeId: utils_validation_1.Joi.string().optional(),
});
//# sourceMappingURL=options.js.map