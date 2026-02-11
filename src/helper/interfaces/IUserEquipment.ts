// import type IDictionary from "./IDictionary";
import type IEquipmentItem from "./IEquipmentItem";
import type IGreetings from "./IGreetings";

export default interface IUserEquipment extends IGreetings {
    image?: string;
    equipments: Record<string, IEquipmentItem[]>;
}