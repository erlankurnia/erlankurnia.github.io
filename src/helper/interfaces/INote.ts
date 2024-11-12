import type IGreetings from "./IGreetings";
import type ISourceContent from "./ISourceContent";

export default interface INote extends IGreetings {
    id: number | string;
    date: string;
    topics: string[];
    source: ISourceContent;
}