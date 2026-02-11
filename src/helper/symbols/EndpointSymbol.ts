import type { InjectionKey, Ref } from "vue";
import type IEndpoint from "../interfaces/IEndpoint";

const EndpointSymbol = Symbol() as InjectionKey<Ref<IEndpoint | null>>;

export default EndpointSymbol;
