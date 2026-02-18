import type IProjectInfo from "../../interfaces/IProjectInfo";

export default interface IPropsProjectListComponent {
    projects: IProjectInfo[],
    limit?: number,
    reverseTheme?: boolean,
}