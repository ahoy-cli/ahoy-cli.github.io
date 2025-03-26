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
            { label: 'Installation & Setup', slug: 'guides/getting-started' },
            { label: 'Shell Autocompletion', slug: 'guides/shell-autocompletion' },
            { label: 'Environment Variables', slug: 'guides/environment-variables' },
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
