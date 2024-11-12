import { RouteMeta } from 'vue-router';
import type IUrl from './IUrl';

export { }

declare module 'vue-router' {
    interface RouteMeta {
        url: IUrl;
        hideNavbar: boolean;
    }
}
