import { ScreenSizeEnum } from '@/helper/interfaces/ScreenSizeEnum';
import { defineStore } from 'pinia';

export const useScreenSizeStore = defineStore('screen_size', {
    state: () => ({
        screenSize: ScreenSizeEnum.SMALL,
    }),
    actions: {
        setScreen(size: ScreenSizeEnum): void {
            this.screenSize = size;
        },
        getScreen(): ScreenSizeEnum {
            return this.screenSize;
        }
    }
});
