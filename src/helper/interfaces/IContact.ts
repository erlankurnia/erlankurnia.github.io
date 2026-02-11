import type IGreetings from "./IGreetings";

export default interface IContact extends IGreetings {
    message: {
        succeed: string;
        failed: string;
    };
    formUrl: string;
}