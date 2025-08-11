import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import mantine from 'eslint-config-mantine';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	{
		ignores: [
			'**/node_modules',
			'**/dist',
			'**/build',
			'**/.next',
			'**/coverage',
			'**/*.d.ts',
		],
	},

	// BASE JAVASCRIPT
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},

	// TYPESCRIPT
	...tseslint
		.config(...mantine, tseslint.configs.recommendedTypeChecked, {
			extends: [
				reactHooks.configs['recommended-latest'],
				reactRefresh.configs.vite,
			],
			languageOptions: {
				parserOptions: {
					project: './tsconfig.json',
					tsconfigRootDir: process.cwd(),
				},
			},
		})
		.map((config) => ({
			...config,
			files: ['**/*.{ts,tsx}'],
		})),

	// REACT
	{
		files: ['**/*.{jsx,tsx}'],
		...pluginReact.configs.flat.recommended,
	},
	{
		files: ['**/*.{jsx,tsx}'],
		...pluginReact.configs.flat['jsx-runtime'],
	},

	// JSON
	{
		files: ['**/*.json'],
		plugins: { json },
		language: 'json/json',
		// rules: {
		// 	'json/*': 'off',
		// },
	},

	// MARKDOWN
	{
		files: ['**/*.md'],
		plugins: { markdown },
		language: 'markdown/gfm',
		extends: ['markdown/recommended'],
	},

	// CSS            Não funciona direito com postcss
	// {
	// 	files: ['**/*.css'],
	// 	plugins: { css },
	// 	language: 'css/css',
	// 	languageOptions: {
	// 		tolerant: true,
	// 	},
	// 	extends: ['css/recommended'],
	// 	rules: {
	// 		'css/no-invalid-properties': ['error', { allowUnknownVariables: true }],
	// 	},
	// },

	// GLOBAL SETTINGS
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
]);
