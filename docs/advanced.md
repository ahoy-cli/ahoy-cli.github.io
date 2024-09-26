# Advanced Usage

## Environment Variables

Ahoy automatically makes all environment variables available in your commands. You can use them like this:

```yaml
commands:
  env-example:
    cmd: echo "My home is $HOME"
```

## Imported Commands

You can import commands from other Ahoy files:

```yaml
commands:
  import-example:
    imports:
      - path/to/other/ahoy.yml
```

## Optional Commands

You can make imported commands optional:

```yaml
commands:
  optional-import:
    imports:
      - path/to/optional/ahoy.yml
    optional: true
```

If the imported file doesn't exist, Ahoy will skip it without throwing an error.

## Bash Completion

Ahoy provides bash completion out of the box. To enable it, add this to your `.bashrc` or `.bash_profile`:

```bash
eval "$(ahoy --generate-bash-completion)"
```

For more detailed information on these features, please refer to our [GitHub repository](https://github.com/ahoy-cli/ahoy).