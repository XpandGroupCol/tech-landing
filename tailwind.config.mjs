/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			transitionProperty: {
				'max-height': 'max-height'
			},
			colors: {
				'header-blue': '#252930',
				'header-lime': '#97F1F3',
				'blue-king': '#0A169A',
				'solution': '#1E1E1E',
				'custom-gray': '#A8A9AC'
			}
		},
		fontFamily: {
			'grotesk': ["Hanken_Grotesk", 'sans-serif'],
			'pmono': ["IBM_Plex_Mono", 'sans-serif'],
		},
	},
	plugins: [],
}
