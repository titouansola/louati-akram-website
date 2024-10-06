import type { Config } from 'tailwindcss';

const PRIMARY = '#D33F1E';

export default {
	content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [],
			},
			colors: {
				primary: PRIMARY,
				secondary: '#3D7F67',
				light: '#FCF7F6',
				dark: '#170501',
			},
			spacing: {
				main: '50px',
				'main-2': '100px',
				'main-3': '150px',
			},
			backgroundImage: {
				'hero-pattern': `linear-gradient(90deg, ${PRIMARY}EE, ${PRIMARY}80), url('/img/hero.jpg')`,
				pattern: 'url(/img/pattern.png)',
			},
		},
	},
	plugins: [],
} satisfies Config;
