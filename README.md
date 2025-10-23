# Jules Extension for Gemini CLI

Jules Gemini CLI extension lets you delegate some of the coding tasks to [Jules](https://jules.google/) asynchronous agent. You can give it tasks like bug fixing, code refactoring, and dependency updates.

## Prerequisites

Before using the Jules extension, you need to:

1.  **Have a Jules Account**: You can sign up at [jules.google.com](https://jules.google.com/).
2.  **Connect Your Repository**: Connect your GitHub repository to your Jules account.

## Installation

Install the Jules extension by running the following command from your terminal *(requires Gemini CLI v0.4.0 or newer)*:

```bash
gemini extensions install https://github.com/gemini-cli-extensions/jules --auto-update
```

The `--auto-update` is optional: if specified, it will update to new versions as they are released.

## Usage

To initiate a Jules task, you must use the `/jules` command followed by your prompt. For example:

```bash
/jules refactor the authentication logic to use a different library
```

Once you start a task with `/jules`, the extension will work in the background to complete it. To check the status of a task, use the `/jules` command with a query about the task.

For example:

```bash
/jules what is the status of my last task?
```

## Resources

- [Jules](https://jules.google/): The backend powering this extension.
- [Gemini CLI extensions](https://github.com/google-gemini/gemini-cli/blob/main/docs/extensions/index.md): Documentation about using extensions in Gemini CLI
- [GitHub issues](https://github.com/gemini-cli-extensions/jules/issues): Report bugs or request features

## Legal

- License: [Apache License 2.0](https://github.com/gemini-cli-extensions/jules/blob/main/LICENSE)
