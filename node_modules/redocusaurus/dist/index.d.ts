import type { LoadContext } from '@docusaurus/types';
import type { PluginOptions } from 'docusaurus-plugin-redoc';
import type { ThemeOptions } from 'docusaurus-theme-redoc';
export interface PresetOptions {
    id?: string;
    debug?: boolean;
    /**
     * Path to the Redocly config file `redocly.yaml`
     */
    config?: string;
    specs: PluginOptions[];
    theme?: ThemeOptions;
}
export type PresetEntry = ['redocusaurus', PresetOptions];
export default function preset(context: LoadContext, opts?: PresetOptions): {
    themes: readonly (readonly [string, ThemeOptions])[];
    plugins: readonly (readonly [string, PluginOptions])[];
};
//# sourceMappingURL=index.d.ts.map