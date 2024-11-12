import type IGreetings from "./IGreetings";
import type ISkillInfo from "./ISkillInfo";

export default interface IUserSkill extends IGreetings {
    topics: ISkillInfo[];
}
