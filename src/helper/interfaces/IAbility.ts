import type IUserSkill from "./IUserSkill";

export default interface IAbility {
    tooltip?: string;
    skill: IUserSkill;
    learn: IUserSkill;
}