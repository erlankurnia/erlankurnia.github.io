import type ISocialMedia from "./ISocialMedia";
import type IGreetings from "./IGreetings";
import type IUserProfile from "./IUserProfile";
import type IUserHistory from "./IUserHistory";
import type IUserSkill from "./IUserSkill";
import type IUserEquipment from "./IUserEquipment";
import type INotebook from "./INotebook";
import type IReference from "./IReference";

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
    skill: IUserSkill;
    learn: IUserSkill;
    equipment: { hardware?: IUserEquipment, software?: IUserEquipment };
    notebook: INotebook;
    reference: IReference;
}