export default interface IDictionary<T> {
    items(): [string, T][] | undefined;
    add(key: string, value: T): void;
    remove(key: string): boolean;
    getItem(key: string): T | undefined;
    containsKey(key: string): boolean;
    keys(): string[];
    values(): T[];
    clear(): void;
    filter(callback: (key: string, value: T) => boolean): IDictionary<T>;
}
