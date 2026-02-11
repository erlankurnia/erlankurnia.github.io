import { ref } from "vue";
import Dictionary from "./interfaces/Dictionary";
import type DictionaryType from "./interfaces/Dictionary";
import type IEndpoint from "./interfaces/IEndpoint";
import type { ISource } from "./interfaces/ISourceContent";

interface IFetchResponse<TData> {
	data?: TData;
	error?: any;
}

// let cachedDataUser: any | null = null;
// let cachedEndpoints: any | null = null;
const cachedData: DictionaryType<string> = new Dictionary<string>();

export const cdn = 'https://cdn.erlankurnia.laness.id/';

export default {
	async fetch<TData>(url: string): Promise<IFetchResponse<TData>> {
		const data = ref<TData | undefined>();
		const error = ref<any>(undefined);
		if (cachedData.containsKey(url)) {
			const cached = cachedData.get(url);
			if (cached) data.value = cached as TData;
		} else {
			try {
				if (!url.startsWith('https://')) {
					if (url.startsWith('/')) {
						url = url.substring(1);
					}
					url = cdn + url;
				}
				const res = await fetch(url);
				const contentType = res.headers.get('content-type');
				if (contentType && contentType.includes('application/json')) {
					const json = await res.json();
					data.value = json as TData;
					cachedData.set(url, json);
				} else {
					const text = await res.text();
					data.value = text as TData;
					cachedData.set(url, text);
				}
				// console.log(url, data.value);
			} catch (err) {
				error.value = err;
			}
		}
		return { data: data.value, error: error.value };
	},
	async getEndpoints(): Promise<IFetchResponse<IEndpoint | undefined>> {
		const res = (await this.fetch<IEndpoint>("endpoints.json"));
		// console.log(res.data);
		return res;
	},
	// async getDataUser<T>(): Promise<T> {
	// 	if (cachedDataUser != null) return cachedDataUser as T;
	// 	const res = await fetch("/data_user.json");
	// 	cachedDataUser = await res.json();
	// 	return cachedDataUser as T;
	// },
	// async fetchData(url: string): Promise<string> {
	// 	const cached = cachedData.get(url);
	// 	if (cached) return cached;
	// 	const res = await fetch(url);
	// 	var list = (await res.text());
	// 	cachedData.set(url, list);
	// 	return list;
	// },
	async getContentReadme(source: ISource): Promise<string> {
		if (source != null && typeof source.type != "undefined" && source.type != null && typeof source.url == "string") {
			let readmeUrl = '';

			switch (source.type.toLowerCase()) {
				case 'github':
					readmeUrl = ("" + source.url).replace("github.com", "raw.githubusercontent.com") + "/main/README.md";
					break;
				case 'local':
					readmeUrl = this.getCdnUrl(source.url);
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
	trimSlash(path: string): string {
		if (path.startsWith('/')) {
			path = path.substring(1);
		}
		if (path.endsWith('/')) {
			path = path.substring(0, path.length - 1);
		}
		return path;
	},
	combinePath(...path: string[]): string {
		if (path.length < 1) return "";
		let completePath = this.trimSlash(path[0]);
		for (let a = 1; a < path.length; a++) {
			completePath += "/" + this.trimSlash(path[a]);
		}
		return completePath;
	},
	getCdnUrl(path: string): string {
		return this.combinePath(cdn, path);
	}
};
