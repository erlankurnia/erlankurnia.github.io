/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			colors: {
				primary: "#79678F",
				secondary: "#334155",
				tertiary: "#F0F3FF",
				quaternary: "#6C5B81",
				dark: "#020617",
				bgPrimary: "#FFFFFF",
				bgSecondary: "#F0F3FF",
				// bgPrimary: "#1D232F",
			},
			screens: {
				"2xs": "360px",
				"xs": "448px",
				"sm": "560px",
				"md": "640px",
				"lg": "768px",
				"xl": "880px",
				"2xl": "1024px",
				"3xl": "1280px",
				"4xl": "1536px",
				"5xl": "2048px",
				// ...defaultTheme.screens,
			},
		},
	},
	plugins: [],
};
