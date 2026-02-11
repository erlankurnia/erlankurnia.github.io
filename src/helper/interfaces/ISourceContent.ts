export interface ISource {
    type: string;
    url: string;
}

export default interface ISourceContent extends ISource {
    images: string[];
}
