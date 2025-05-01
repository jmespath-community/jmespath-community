// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'JMESPath Community',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jmespath-community/jmespath.spec' }],
			sidebar: [
				{
					label: 'Tutorial',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Tutorial', slug: 'tutorials/tutorial' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Examples', slug: 'guides/examples' },
					],
				},
				{
					label: 'Reference',
					//autogenerate: { directory: 'reference' },
					items: [
						{ label: 'Specification', slug: 'reference/specification' },
						{ label: 'Functions', slug: 'reference/functions' },
						{ label: 'Libraries', slug: 'reference/libraries' },
					],
				},
			],
		}),
	],
});
