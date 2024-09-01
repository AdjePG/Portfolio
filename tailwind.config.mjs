/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xxs': '450px', 
			'xs': '540px', 
			'sm': '640px',
			'md': '768px',
			'md-lg': '908px',
			'lg': '1024px',
			'xl': '1280px',
		},
		extend: {
			screens: {
				'h-md-lg': {'raw': '(min-height: 908px)'},
			  },
		},
	},
	plugins: [],
}
