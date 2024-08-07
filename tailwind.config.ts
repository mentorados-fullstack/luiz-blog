import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.tsx'],
	theme: {
		colors: {
			white: 'rgb(var(--white) / <alpha-value>)',
			black: 'rgb(var(--black) / <alpha-value>)',
			base: {
				100: 'rgb(var(--100) / <alpha-value>)',
				200: 'rgb(var(--200) / <alpha-value>)',
				300: 'rgb(var(--300) / <alpha-value>)'
			},
			gradient: {
				100: 'rgb(var(--gradient-100) / <alpha-value>)',
				200: 'rgb(var(--gradient-200) / <alpha-value>)'
			}
		},
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)']
			},
			screens: {
				'2xl': '87.5rem',
				'3xl': '100rem'
			}
		},
		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--radix-accordion-content-height)' }
			},
			'accordion-up': {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0' }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out'
		}
	},
	plugins: [require('tailwindcss-animate')]
} satisfies Config;
