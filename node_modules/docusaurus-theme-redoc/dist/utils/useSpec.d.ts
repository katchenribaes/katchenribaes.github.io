import '../global';
import { AppStore, RedocRawOptions } from 'redoc';
import { SpecProps } from '../types/common';
/**
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2023 Rohit Gohri
 * Released under the MIT License
 */
export declare function useSpec({ spec, url, themeId }: SpecProps, optionsOverrides?: RedocRawOptions): {
    hasLogo: boolean;
    store: AppStore;
    options: RedocRawOptions;
    darkThemeOptions: RedocRawOptions;
    lightThemeOptions: RedocRawOptions;
};
//# sourceMappingURL=useSpec.d.ts.map