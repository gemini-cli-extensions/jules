/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, vi } from 'vitest';
import { startNewJulesTask } from '../../src/jules';
import { execFile } from 'child_process';

type ParsedResult = {
  stdout?: string;
  stderr?: string;
  error?: string;
};

describe('Jules MCP Server', () => {
  const mockExecFile = vi.fn();

  it('should call startNewJulesTask with correct arguments', async () => {
    const repo_name = 'test-repo';
    const user_task_description = 'test task';

    mockExecFile.mockImplementation((command, args, options, callback) => {
      callback(null, 'success', '');
    });

    const result = await startNewJulesTask({ repo_name, user_task_description }, { execFile: mockExecFile as any });

    expect(mockExecFile).toHaveBeenCalledWith(
      'jules',
      ['remote', 'new', '--repo', 'test-repo', '--session', 'test task'],
      { encoding: 'utf8' },
      expect.any(Function)
    );

    const parsedResult = JSON.parse(result.content![0].text as string) as ParsedResult;
    expect(parsedResult.stdout).toBe('success');
  });
});
