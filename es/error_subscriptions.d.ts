import { SelectorArray } from "./types";
declare type SubcribersFunction = (...args: [Error?, Function?, IArguments?, SelectorArray?, any?]) => void;
export declare function subscribe(fn: SubcribersFunction): () => void;
export declare function emitError(...args: [Error?, Function?, IArguments?, SelectorArray?, any?]): void;
export {};
