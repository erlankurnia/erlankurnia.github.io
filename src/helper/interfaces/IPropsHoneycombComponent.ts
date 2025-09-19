export interface IHoneycombItem {
    label: string,
    icon?: object,
    iconName?: string,
}

export default interface IPropsHoneycombComponent {
    refSize: number,
    data: IHoneycombItem[],
}