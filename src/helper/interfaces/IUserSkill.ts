import type IGreetings from "./IGreetings";
import type ISkillInfo from "./ISkillInfo";
import type ISkillInfoCategorized from "./ISkillInfoCategorized";

export default interface IUserSkill extends IGreetings {
    topics?: ISkillInfo[];
    categorized?: ISkillInfoCategorized[];
}
