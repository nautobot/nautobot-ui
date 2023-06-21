import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'feature',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};

module.exports = Configuration;
