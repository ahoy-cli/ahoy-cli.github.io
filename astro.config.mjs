// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
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
          label: "Getting Started",
          items: [
            { label: "Installation & Setup", slug: "guides/getting-started" },
            { label: "Next Steps", slug: "guides/next-steps" },
            {
              label: "Shell Autocompletion",
              slug: "guides/shell-autocompletion",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "YAML Configuration", slug: "guides/yaml-config" },
            { label: "Command Execution", slug: "guides/command-execution" },
            { label: "Importing & Overriding", slug: "guides/importing" },
            { label: "Environment", slug: "guides/environment" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "CLI Reference", slug: "reference/cli" },
            { label: "Environment Reference", slug: "reference/environment" },
            { label: "YAML Schema", slug: "reference/yaml-schema" },
          ],
        },
      ],
    }),
  ],
});
