import moment from "moment";

export default {
	data() {
		return {
			monthsEnum: [
				{ en: "January", id: "Januari" },
				{ en: "February", id: "Februari" },
				{ en: "March", id: "Maret" },
				{ en: "April", id: "April" },
				{ en: "May", id: "Mei" },
				{ en: "June", id: "Juni" },
				{ en: "July", id: "Juli" },
				{ en: "August", id: "Agustus" },
				{ en: "September", id: "September" },
				{ en: "October", id: "Oktober" },
				{ en: "November", id: "November" },
				{ en: "December", id: "Desember" },
			],
		};
	},
	methods: {
		dateToday() {
			return moment().format("YYYY-MM-DD");
		},
		dateFormat(dateStr, dateFormat) {
			if (("" + dateStr).toUpperCase() == "NOW") return moment().format(dateFormat);
			else return moment(new Date(dateStr).getTime()).format(dateFormat);
		},
		monthDiff(dateFrom, dateTo) {
			dateFrom = ("" + dateFrom).toUpperCase();
			dateTo = ("" + dateTo).toUpperCase();

			if (dateFrom == "NOW" || dateFrom == "" || dateFrom == null) dateFrom = new Date();
			if (dateTo == "NOW" || dateTo == "" || dateTo == null) dateTo = new Date();

			if (typeof dateFrom === "string") dateFrom = new Date(dateFrom);
			if (typeof dateTo === "string") dateTo = new Date(dateTo);

			return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
		},
		monthsToYears(months) {
			let years = Math.floor(months / 12);
			months = months % 12;

			if (years > 1) years = years + " yrs";
			else if (years == 1) years = years + " yr";
			else years = "";

			if (months > 1) months = months + " mos";
			else if (months == 1) months = months + " mo";
			else months = "";

			return `${years} ${months}`.trim();
		},
		getYearDiff(year) {
			return new Date().getFullYear() - year;
		},
	},
};
