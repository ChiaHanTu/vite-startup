
import { globalIgnores } from "eslint/config";
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue'

export default tseslint.config(
  globalIgnores(['.stylelintrc.js']),
  {
    extends: [
      tseslint.configs.recommended,
      pluginVue.configs['flat/recommended'],
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "vue/multi-word-component-names": "off",
    }
  }
);
