import type { StorybookConfig } from "@storybook/react-webpack5";
import custom from "../webpack.config.js";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...(config.module?.rules ?? []),
          ...custom.module.rules.filter(
            (rule) => rule.test.toString().indexOf("css") == -1
          ),
        ],
      },
    };
  },
};
export default config;
