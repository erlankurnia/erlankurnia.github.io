import type { InjectionKey, Ref } from "vue";
import type IDataApp from "../interfaces/IDataApp";

const DataAppSymbol = Symbol() as InjectionKey<Ref<IDataApp | null>>;

export default DataAppSymbol;