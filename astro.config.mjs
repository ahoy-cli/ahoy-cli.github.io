// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Ahoy',
      description: 'Create self-documenting CLI programs with ease, using YAML files in your source tree',
      customCss: [
        './src/styles/custom.css',
      ],
      // plugins: [
      //   starlightThemeRapide(),
      // ],
      social: {
        github: 'https://github.com/ahoy-cli/ahoy',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation & Setup', slug: 'guides/getting-started' },
            { label: 'Shell Autocompletion', slug: 'guides/shell-autocompletion' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'YAML Configuration', slug: 'guides/yaml-config' },
            { label: 'Command Execution', slug: 'guides/command-execution' },
            { label: 'Importing & Overriding', slug: 'guides/importing' },
            { label: 'Environment', slug: 'guides/environment' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'CLI Reference', slug: 'reference/cli' },
            { label: 'Environment Reference', slug: 'reference/environment' },
            { label: 'YAML Schema', slug: 'reference/yaml-schema' },
          ],
        },
        {
          label: 'Top',
          items: [
            { label: 'Installation', slug: 'installation' },
            { label: 'Introduction', slug: 'introduction' },
            { label: 'Quick Start', slug: 'quick-start' },
          ],
        },
      ],
    }),
  ],
});
