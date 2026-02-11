import type IUserEquipment from "./IUserEquipment";

export default interface IEquipment {
    hardware?: IUserEquipment;
    software?: IUserEquipment;
}