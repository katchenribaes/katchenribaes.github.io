"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function preset(context, opts = {
    specs: [],
    theme: {},
}) {
    let specsArray = [];
    const { debug = false, specs, theme = {}, config } = opts;
    if (debug) {
        console.error('[REDOCUSAURUS] Options:', opts);
    }
    if (Array.isArray(specs)) {
        specsArray = specs;
    }
    else if (specs) {
        specsArray = [specs];
    }
    if (debug) {
        console.error('[REDOCUSAURUS] Specs:', specsArray);
    }
    const id = opts.id ? `-${opts.id}` : '';
    const themeId = `theme-redoc${id}`;
    const resolvedPreset = {
        themes: [
            [
                require.resolve('docusaurus-theme-redoc'),
                {
                    id: themeId,
                    options: config,
                    ...theme,
                },
            ],
        ],
        plugins: [
            ...specsArray.map((pluginOpts, index) => [
                require.resolve('docusaurus-plugin-redoc'),
                {
                    config,
                    ...pluginOpts,
                    themeId,
                    id: pluginOpts.id || `plugin-redoc${id}-${index}`,
                    debug,
                },
            ]),
        ],
    };
    if (debug) {
        console.error('[REDOCUSAURUS] Final:', JSON.stringify(resolvedPreset, null, 2));
    }
    return resolvedPreset;
}
exports.default = preset;
//# sourceMappingURL=index.js.map