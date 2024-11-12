import type IGreetings from "./IGreetings";
import type INote from "./INote";

export default interface INotebook extends IGreetings {
    notes: INote[];
}