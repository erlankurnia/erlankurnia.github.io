import MarkdownComponent from '../../components/MarkdownComponent.vue';
import DetailItemComponent from '../../components/DetailItemComponent.vue';
import type IPropsMarkdownComponent from '../contracts/props/IPropsMarkdownComponent';
import type IPropsDetailItemComponent from '../contracts/props/IPropsDetailItemComponent';

export type TDynamicModalComponent =
    { component: typeof MarkdownComponent; props: IPropsMarkdownComponent } |
    { component: typeof DetailItemComponent; props: IPropsDetailItemComponent };
