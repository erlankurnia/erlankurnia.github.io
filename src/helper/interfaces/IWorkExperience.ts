import type ISourceContent from "./ISourceContent";

export default interface IWorkExperience {
    id: number;
    title: string;
    status: string;
    dateFrom: string;
    dateTo: string;
    desc: string;
    source?: ISourceContent;
}
