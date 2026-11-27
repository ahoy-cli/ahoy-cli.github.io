// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://ahoy-cli.github.io",
  integrations: [
    starlight({
      title: "Ahoy",
      description:
        "Create self-documenting CLI programs with ease, using YAML files in your source tree",
      logo: {
        src: "./src/assets/logo.svg",
      },
      customCss: ["./src/styles/custom.css"],

      social: [
        {
          icon: "github",
          href: "https://github.com/ahoy-cli/ahoy",
          label: "GitHub",
        },
      ],
      sidebar: [
        {
          label: "Getting started",
          items: [
            { label: "Installation & setup", slug: "guides/getting-started" },
            { label: "Next steps", slug: "guides/next-steps" },
            {
              label: "Shell autocompletion",
              slug: "guides/shell-autocompletion",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Writing commands", slug: "guides/writing-commands" },
            { label: "Command execution", slug: "guides/command-execution" },
            { label: "Importing & overriding", slug: "guides/importing" },
            { label: "Environment variables", slug: "guides/environment" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "CLI reference", slug: "reference/cli" },
            { label: "Environment reference", slug: "reference/environment" },
            { label: "YAML schema", slug: "reference/yaml-schema" },
            { label: "Security", slug: "security" },
          ],
        },
      ],
    }),
  ],
});
