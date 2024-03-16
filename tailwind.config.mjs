/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			primary: 'var(--aw-color-primary)',
			secondary: 'var(--aw-color-secondary)',
			accent: 'var(--aw-color-accent)',
			default: 'var(--aw-color-text-default)',
			muted: 'var(--aw-color-text-muted)',
		  }
		},
	  },
	plugins: [],
}
