import type IGreetings from "./IGreetings";
import type IProjectInfo from "./IProjectInfo";
import type ISourceContent from "./ISourceContent";

export interface IPortfolio extends IGreetings {
    rootDir: string;
    source?: ISourceContent;
    projects?: IProjectInfo[];
}