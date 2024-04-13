/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#030520',
				secondary: '#0616EF',
				tertiary: '#CBD5E1',
				dark: '#252A34',
				light: '#EAEAEA'
			}
		}
	},
	plugins: [require("@tailwindcss/typography")],
}
