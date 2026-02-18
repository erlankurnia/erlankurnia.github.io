import type ISourceContent from "../../interfaces/ISourceContent";

export default interface IPropsMarkdownComponent {
    contentMarkdown: string,
    sourceMarkdown?: ISourceContent,
}