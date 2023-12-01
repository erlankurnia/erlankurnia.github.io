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
				primary: "#79678F", // French Lilac
				secondary: "#334155", // Charcoal
				tertiary: "#FFFFFF",
				quaternary: "#F0F3FF",
				dark: "#020617",
			},
			screens: {
				"3xs": "288px",
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
