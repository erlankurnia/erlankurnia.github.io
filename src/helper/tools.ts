export default {
	async getDataUser<T>(): Promise<T> {
		const res = await fetch("/data_user.json");
		return await res.json() as T;
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
	}
};
