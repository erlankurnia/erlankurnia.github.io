import type IAttribution from "./IAttribution";
import type IBuiltUsing from "./IBuiltUsing";

export default interface IReference {
    builtUsing: IBuiltUsing;
    attribution: IAttribution;
}