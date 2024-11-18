import type IDictionary from "./IDictionary";

export default class Dictionary<T> implements IDictionary<T> {
    private _items: { [key: string]: T } = {};

    add(key: string, value: T): void {
        this._items[key] = value;
    }

    remove(key: string): boolean {
        if (this._items.hasOwnProperty(key)) {
            delete this._items[key];
            return true;
        }
        return false;
    }

    getItem(key: string): T | undefined {
        return this._items[key];
    }

    items(): [string, T][] {
        return Object.entries(this._items);
    }

    containsKey(key: string): boolean {
        return this._items.hasOwnProperty(key);
    }

    keys(): string[] {
        return Object.keys(this._items);
    }

    values(): T[] {
        return Object.values(this._items);
    }

    clear(): void {
        this._items = {};
    }

    filter(callback: (key: string, value: T) => boolean): IDictionary<T> {
        const filteredDictionary = new Dictionary<T>();
        for (const key in this._items) {
            if (this._items.hasOwnProperty(key) && callback(key, this._items[key])) {
                filteredDictionary.add(key, this._items[key]);
            }
        }
        return filteredDictionary;
    }
}
