/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        tertiary: "#FFFFFF", // White
        quaternary: "#F0F3FF", // Alice Blue
        dark: "#020617", // Rich Black
        primaryDark: "#FFDD00", // Golden Yellow
        secondaryDark: "#FFEEFF", // Magnolia
        tertiaryDark: "#161616", // Chinese Black
        quaternaryDark: "#404040", // Black Olive
        // quaternaryDark: "#606040", // Quincy
        light: "#C8CCCE", // Silver Finish
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
        'h-sm': { 'raw': '(min-height: 768px)' },
        'max-h-sm': { 'raw': '(max-height: 768px)' },
        'max-screen-sm': { 'raw': '(max-height: 768px) and (max-width: 560px)' },
        // ...defaultTheme.screens,
      },
    },
    // variants: { extend: { screens: ['max-xs', 'max-sm', 'max-md', 'max-lg', 'max-xl', 'max-2xl'], }, },
  },
  plugins: [],
}

