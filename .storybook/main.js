module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    emotionAlias: false,
  },
  framework: '@storybook/react',
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    check: true,
  },
};
