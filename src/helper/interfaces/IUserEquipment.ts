// import type IDictionary from "./IDictionary";
import type IEquipment from "./IEquipment";
import type IGreetings from "./IGreetings";

export default interface IUserEquipment extends IGreetings {
    image?: string;
    equipments: Record<string, IEquipment[]>;
}