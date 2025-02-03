import type ISourceContent from "./ISourceContent";

export default interface IPropsMarkdownComponent {
    contentMarkdown: string,
    sourceMarkdown?: ISourceContent,
}