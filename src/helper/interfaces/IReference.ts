import type IAttribution from "./IAttribution";
import type IGreetings from "./IGreetings";

export default interface IReference extends IGreetings {
    attributions: IAttribution[];
}