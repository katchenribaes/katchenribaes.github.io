import type { Config, Document } from '@redocly/openapi-core';
/**
 * Based on loadAndBundleSpec from redoc.
 * Customized to pass custom loaded config
 * @see https://github.com/Redocly/redoc/blob/33be51a7a4068f44fd914314002c058a204ba0c2/src/utils/loadAndBundleSpec.ts
 */
export declare function loadSpecWithConfig(specUrlOrObject: object | string, config: Config): Promise<{
    bundle: Document;
    problems: import("@redocly/openapi-core").NormalizedProblem[];
    fileDependencies: Set<string>;
    rootType: import("@redocly/openapi-core/lib/types").NormalizedNodeType;
    refTypes: Map<string, import("@redocly/openapi-core/lib/types").NormalizedNodeType> | undefined;
    visitorsData: Record<string, Record<string, unknown>>;
}>;
//# sourceMappingURL=loadSpec.d.ts.map