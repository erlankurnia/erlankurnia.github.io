import type IAttributionTo from "./IAttributionTo";
import type IGreetings from "./IGreetings";

export default interface IAttribution extends IGreetings {
    to: IAttributionTo[];
}