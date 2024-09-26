# Usage

## Basic Usage

After [installation](installation.md), run `ahoy init` in your project directory. This will create a `.ahoy.yml` file that you can customize for your project's specific needs.

## Writing Commands

Commands are defined in the `.ahoy.yml` file. Here's a basic structure:

```yaml
ahoyapi: v2
commands:
  hello:
    usage: Say hello
    cmd: echo "Hello, World!"
```

## Command Aliases

You can define aliases for your commands to make them easier to use:

```yaml
ahoyapi: v2
commands:
  hello:
    usage: Say hello
    cmd: echo "Hello, World!"
    aliases: ["hi", "greet"]
```

Now, you can use `ahoy hello`, `ahoy hi`, or `ahoy greet` to run this command.

## Using Commands Within Commands

Ahoy allows you to use commands within other commands:

```yaml
ahoyapi: v2
commands:
  composed-command:
    usage: Run multiple commands
    cmd: |
      ahoy hello
      ahoy another-command
```

## Templates

Ahoy supports a powerful template system. You can use Go templates in your command definitions:

```yaml
ahoyapi: v2
commands:
  greet:
    usage: Greet someone
    cmd: echo "Hello, {{args}}"
```

Run this with `ahoy greet World` to get "Hello, World".

For more advanced usage and features, please refer to our [advanced guide](advanced.md).