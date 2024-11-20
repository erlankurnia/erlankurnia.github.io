export default interface IDictionary<T> {
    items(): [string, T][] | undefined;
    get(key: string): T | undefined;
    set(key: string, value: T): void;
    remove(key: string): boolean;
    containsKey(key: string): boolean;
    keys(): string[];
    values(): T[];
    clear(): void;
    filter(callback: (key: string, value: T) => boolean): IDictionary<T>;
}
