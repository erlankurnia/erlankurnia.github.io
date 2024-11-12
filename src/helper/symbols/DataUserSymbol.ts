import type { InjectionKey, Ref } from "vue";
import type IDataUser from "../interfaces/IDataUser";

const DataUserSymbol = Symbol() as InjectionKey<Ref<IDataUser | null>>;

export default DataUserSymbol;