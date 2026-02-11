// import type ISocialMedia from "./ISocialMedia";
// import type IGreetings from "./IGreetings";
// import type IUserProfile from "./IUserProfile";
// import type IUserHistory from "./IUserHistory";
// import type IUserEquipment from "./IUserEquipment";
// import type INotebook from "./INotebook";
// import type IReference from "./IReference";
// import type IAbility from "./IAbility";
// import type { IPortfolio } from "./IPortfolio";
// import type IHero from "./IHero";

export default interface IDataApp {
    navbarBrand: string;
    image: string;
    appName: string;
    fullname: string;
    description: string;
    logo: string[];
    // hero: IHero;
    // intro: IGreetings[];
    // contact: IGreetings;
    // socialMedia: ISocialMedia;
    // profile: IUserProfile;
    // history: IUserHistory;
    // ability: IAbility;
    // portfolio: IPortfolio;
    // equipment: { hardware?: IUserEquipment, software?: IUserEquipment };
    // notebook: INotebook;
    // reference: IReference;
}