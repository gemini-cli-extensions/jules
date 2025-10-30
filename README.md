# Jules Extension for Gemini CLI

Jules extension for Gemini CLI lets you delegate coding tasks to the [Jules](https://jules.google/) asynchronous agent. This allows you to offload work and track its progress without blocking your terminal.

Some examples of tasks you can assign to Jules are:
* Bug fixing
* Code refactoring
* Dependency version updates
* Documentation maintenance

Jules works on these tasks in the background. Once the work is complete, Jules can submit the changes to a new branch on your GitHub repository. More at [jules.google/docs](https://jules.google/docs).

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
/jules add missing unit tests to my repo
```

Once you start a task with `/jules`, the extension will work in the background to complete it. To check the status of a task, use the `/jules` command with a query about the task.

For example:

```bash
/jules what is the status of my last task?
```

> [!TIP]
> Gemini CLI will automatically install the Jules CLI if it's not already available. If the installation requires sudo permissions (e.g., `sudo npm install ...`), you will be prompted for your password. To enter it, press `CTRL+F` to switch focus to the interactive shell prompt.
> 
> <img width="1600" height="306" alt="456160640__70515148__1638165 (1)" src="https://github.com/user-attachments/assets/c79ddfdd-de45-48a3-83e5-f8ece6888678" />

## Resources

- [Jules](https://jules.google/): The backend powering this extension.
- [Gemini CLI extensions](https://github.com/google-gemini/gemini-cli/blob/main/docs/extensions/index.md): Documentation about using extensions in Gemini CLI
- [GitHub issues](https://github.com/gemini-cli-extensions/jules/issues): Report bugs or request features

## Legal

- License: [Apache License 2.0](https://github.com/gemini-cli-extensions/jules/blob/main/LICENSE)
