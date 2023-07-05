/// <reference types="react" />
import '../../global';
import { RedocRawOptions } from 'redoc';
import { SpecProps } from '../../types/common';
import './styles.css';
/*!
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2023 Rohit Gohri
 * Released under the MIT License
 */
declare function Redoc(props: Partial<SpecProps> & {
    className?: string;
    optionsOverrides?: RedocRawOptions;
}): JSX.Element;
export default Redoc;
//# sourceMappingURL=Redoc.d.ts.map