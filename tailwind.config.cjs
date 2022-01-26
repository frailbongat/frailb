module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter']
			},
			colors: {
				dark: '#2c313c',
				darker: '#23272e',
				purple: '#c678dd',
				red: '#e06c75',
				green: '#98c379',
				blue: '#61afef',
				yellow: '#e5c07b'
			}
		}
	},
	safelist: [
		'hover:text-purple',
		'hover:text-red',
		'hover:text-green',
		'hover:text-blue',
		'hover:text-yellow'
	],
	plugins: []
};
