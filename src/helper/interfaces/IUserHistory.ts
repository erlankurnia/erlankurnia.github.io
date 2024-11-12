import type IGreetings from "./IGreetings";
import type IWorkExperience from "./IWorkExperience";

export default interface IUserHistory extends IGreetings {
    timeline: IWorkExperience[];
}
