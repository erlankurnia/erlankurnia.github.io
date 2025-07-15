import type IAttributionTo from "./IAttributionTo";
import type IGreetings from "./IGreetings";

export default interface IBuiltUsing extends IGreetings {
    techStack: IAttributionTo[];
}