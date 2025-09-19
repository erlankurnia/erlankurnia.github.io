import Dictionary from "./interfaces/Dictionary";
import type DictionaryType from "./interfaces/Dictionary";

let cachedDataUser: any | null = null;
let cachedQuotes: DictionaryType<string> = new Dictionary<string>();
export default {
	async getDataUser<T>(): Promise<T> {
		if (cachedDataUser != null) return cachedDataUser as T;
		const res = await fetch("/data_user.json");
		cachedDataUser = await res.json();
		return cachedDataUser as T;
	},
	async fetchData(url: string): Promise<string> {
		const cachedData = cachedQuotes.get(url);
		if (cachedData) return cachedData;
		const res = await fetch(url);
		var list = (await res.text());
		cachedQuotes.set(url, list);
		return list;
	},
	async getContentReadme(source: { type: string, url: string }): Promise<string> {
		if (source != null && typeof source.type != "undefined" && source.type != null && typeof source.url == "string") {
			let readmeUrl = '';

			switch (source.type.toLowerCase()) {
				case 'github':
					readmeUrl = ("" + source.url).replace("github.com", "raw.githubusercontent.com") + "/main/README.md";
					break;
				case 'local':
					readmeUrl = window.location.origin + source.url;
					break;
			}
			// console.log(readmeUrl);

			const res = await fetch(readmeUrl);
			return await res.text();
		}

		return Promise.resolve("");
	},
	verifyImageUrl(url: string): Promise<boolean> {
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => resolve(true);
			img.onerror = () => resolve(false);
			img.src = url;
		});
	},
	getRandomIndexes(arrayLength: number, count: number = 3): number[] {
		if (count > arrayLength) {
			throw new Error("Requested more indexes than array length");
		}

		const indexes = Array.from({ length: arrayLength }, (_, i) => i);
		for (let i = indexes.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[indexes[i], indexes[j]] = [indexes[j], indexes[i]];
		}

		return indexes.slice(0, count);
	},
};
