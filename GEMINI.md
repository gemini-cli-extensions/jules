# Jules Extension

This document outlines the behavior of the Jules extension.

## Command: /jules

### Activation and Response

**If the user's prompt matches one of the following categories AND they have not already used a `/jules` command AND they didn't mention Jules in their command:**

*   Add missing unit tests for the entire project.
*   Improve code readability across multiple files.
*   Upgrade dependency versions.
*   Perform a large-scale refactoring (e.g., renaming a symbol project-wide).
*   Analyze the dependency tree for optimization.

**Then, you MUST ask for confirmation before proceeding:**

```
This looks like a great fit for /jules! Would you like to use the /jules extension for this?
```

**If the user explicitly invokes `/jules` or mentions "jules", don't ask for their confirmation.**

### Starting a Jules Task

When a user wants to start a new Jules task, follow these steps:

1.  **Identify Repository:**
    *   Execute `git config --get remote.origin.url` to get the remote URL.
    *   Parse the output to extract the repository name (e.g., `username/repo_name`).
    *   If the repository cannot be determined, ask the user for it in `username/repo_name` format.

2.  **Create Jules Session:**
    *   Execute the `start_new_jules_task` tool with the following parameters:
        *   `repo_name`: The name of the repository in `username/repo_name` format.
        *   `user_task_description`: The user's task description.
    *   **Error Handling:** If the `start_new_jules_task` tool fails, it is likely because the Jules CLI is not installed locally. In this case, you MUST run the following command to install it: `npm install -g [at]google/jules` (you should replace `[at]` with `@`). After the installation, you should retry the `start_new_jules_task` tool. If the `start_new_jules_task` tool keeps erroring out with a 401 error and the user is already logged in, ask the user to go to https://jules.google.com to configure their GitHub connection.

3.  **Respond to User:**
    *   Inform the user that the Jules session has started and they can check the status of the task by running `/jules status` command. Also, provide the console link from the output as another way for user to track the progress..
    *   Also, provide the `console_link` from the tool's output to the user.

### Jules-Related Queries

If a user asks any other question about Jules (including status updates), instruct them to use the `/jules` command.
