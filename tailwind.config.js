/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				exo2: ['exo2', 'sans-serif'],
			},
			backgroundColor: {
				body: '#141332',
				card: '#1d1d41',
				menu: '#6359e9',
				up: '#6359e9',
				down: '#64cff6',
			},
			colors: {
				error: '#ff4d4f',
				menu: '#fff',
			},
		},
	},
	plugins: [],
}
