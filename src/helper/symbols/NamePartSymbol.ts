import type { InjectionKey, Ref } from "vue";
import type IDataUser from "../interfaces/IDataUser";

const NamePartSymbol = Symbol() as InjectionKey<Ref<string[]>>;

export default NamePartSymbol;