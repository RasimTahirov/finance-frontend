/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				exo2: ['exo2', 'sans-serif'],
			},
			backgroundColor: {
				darkBody: '#111111',
				lightBody: '#f8f9fd',
				darkCard: '#1c1d24',
				lightCard: '#ffffff',
				menu: '#304daf',
				darkMenu: '#304daf',
				income: '#6359e9',
				expenses: '#64cff6',
			},
			colors: {
				error: '#ff4d4f',
				menu: '#fff',
			},
			boxShadow: {
				card: '0px 0px 8px 2px rgba(34, 60, 80, 0.2)',
			},
			textColor: {
				light: '#141212',
				dark: '#f7f5f5',
			},
		},
	},
	plugins: [],
}

// body - f7f6fb
// card - ffffff
