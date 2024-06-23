export default {
	async getDataUser() {
		const res = await fetch("/data_user.json");
		return await res.json();
	},
	async getContentReadme(source) {
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
			const resText = await res.text();
			return resText;
		}

		return '';
	}
};
