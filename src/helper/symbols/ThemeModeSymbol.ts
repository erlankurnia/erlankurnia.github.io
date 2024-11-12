import type { InjectionKey, Ref } from "vue";

const ThemeModeSymbol = Symbol() as InjectionKey<Ref<boolean>>;

export default ThemeModeSymbol;