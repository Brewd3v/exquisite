/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#EE5B28",
				secondary: "#203734",
				"primary-light": "#FFDACD",
				"primary-medium": "#FFB196",
				"primary-gray": "#5E687C",
			},
			fontFamily: {
				jost: "Jost, sans-serif",
			},
			boxShadow: {
				theme: "4px 0px 70px rgb(0, 0, 0, 0.08)",
			},
		},
	},
	plugins: [],
};
