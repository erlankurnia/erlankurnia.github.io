import type ISocialMedia from "./ISocialMedia";
import type IGreetings from "./IGreetings";
import type IUserProfile from "./IUserProfile";
import type IUserHistory from "./IUserHistory";
import type IUserEquipment from "./IUserEquipment";
import type INotebook from "./INotebook";
import type IReference from "./IReference";
import type IAbility from "./IAbility";

export default interface IDataUser {
    navbarBrand: string;
    quote: string;
    image: string;
    logo: string[];
    intro: IGreetings[];
    contact: IGreetings;
    socialMedia: ISocialMedia;
    profile: IUserProfile;
    history: IUserHistory;
    ability: IAbility;
    equipment: { hardware?: IUserEquipment, software?: IUserEquipment };
    notebook: INotebook;
    reference: IReference;
}