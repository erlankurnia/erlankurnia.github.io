import type IProjectInfo from "./IProjectInfo";

export default interface IPropsProjectListComponent {
    projects: IProjectInfo[],
    limit?: number,
    reverseTheme?: boolean,
}