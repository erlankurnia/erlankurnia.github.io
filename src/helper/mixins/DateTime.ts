import moment from "moment";

export function useDateTime() {
	const monthsEnum = [
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
	];
	const dateToday = (): string => {
		return moment().format("YYYY-MM-DD");
	};
	const dateFormat = (dateStr: string, dateFormat: string): string => {
		if (("" + dateStr).toUpperCase() == "NOW") return moment().format(dateFormat);
		else return moment(new Date(dateStr).getTime()).format(dateFormat);
	};
	const monthDiff = (dateFromStr: string, dateToStr: string): number => {
		dateFromStr = ("" + dateFromStr).toUpperCase();
		dateToStr = ("" + dateToStr).toUpperCase();

		let dateTo: Date | null = moment().toDate();
		let dateFrom: Date | null = moment().toDate();

		if (dateFromStr != "NOW" && dateFromStr != "" && dateFromStr != null) dateFrom = new Date(dateFromStr);
		if (dateToStr != "NOW" && dateToStr != "" && dateToStr != null) dateTo = new Date(dateToStr);

		return (dateTo?.getMonth() ?? 0) - (dateFrom?.getMonth() ?? 0) + 12 * ((dateTo?.getFullYear() ?? 0) - (dateFrom?.getFullYear() ?? 0));
	};
	const monthsToYears = (months: number): string => {
		const years = Math.floor(months / 12);
		months = months % 12;

		let yearsStr = "";
		let monthsStr = "";

		if (years > 1) yearsStr = years + " yrs";
		else if (years == 1) yearsStr = years + " yr";
		else yearsStr = "";

		if (months > 1) monthsStr = months + " mos";
		else if (months == 1) monthsStr = months + " mo";
		else monthsStr = "";

		return `${yearsStr} ${monthsStr}`.trim();
	};
	const getYearDiff = (year: number): number => {
		return new Date().getFullYear() - year;
	};

	return {
		monthsEnum,
		dateToday,
		dateFormat,
		monthDiff,
		monthsToYears,
		getYearDiff,
	}
};
