// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ahoy',
			description: 'Create self-documenting CLI programs with ease, using YAML files in your source tree',
			social: {
				github: 'https://github.com/ahoy-cli/ahoy',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'Installation', slug: 'installation' },
						{ label: 'Quick Start', slug: 'quick-start' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'YAML Configuration', slug: 'guides/yaml-config' },
						{ label: 'Command Execution', slug: 'guides/command-execution' },
						{ label: 'Environment Variables', slug: 'guides/environment' },
						{ label: 'Importing & Overriding', slug: 'guides/importing' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'CLI Reference', slug: 'reference/cli' },
						{ label: 'YAML Schema', slug: 'reference/yaml-schema' },
						{ label: 'Environment Variables', slug: 'reference/environment' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'Basic Usage', slug: 'examples/basic' },
						{ label: 'Docker Integration', slug: 'examples/docker' },
						{ label: 'Complex Scripts', slug: 'examples/complex' },
					],
				},
			],
		}),
	],
});