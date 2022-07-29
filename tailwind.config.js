/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'red-500': 'rgb(239 68 68 / var(--tw-bg-opacity))',
			},
		},
	},
	plugins: [],
};
