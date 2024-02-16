export default {
	async getDataUser() {
		const res = await fetch("/data_user.json");
		return await res.json();
	},
};
