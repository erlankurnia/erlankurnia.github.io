export default interface IProjectInfo {
    id: number;
    title: string;
    description: string;
    date: string;
    slug?: string;
    imagesDir?: string;
    url?: string;
    repo?: string;
    features?: string[];
    technologies: string[];
}
