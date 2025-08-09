import css from '@eslint/css';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	// Base JS configuration (applies to all JS/TS files)
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},

	// React configuration (only for JS/TS files)
	{
		files: ['**/*.{js,jsx,ts,tsx}'], // Only apply to JS/TS files
		...pluginReact.configs.flat.recommended,
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'], // Only apply to JS/TS files
		...pluginReact.configs.flat['jsx-runtime'],
	},

	// TypeScript configuration
	tseslint.configs.recommended,

	// JSON configuration
	{
		files: ['**/*.json'],
		plugins: { json },
		language: 'json/json',
		extends: ['json/recommended'],
	},

	// Markdown configuration
	{
		files: ['**/*.md'],
		plugins: { markdown },
		language: 'markdown/gfm',
		extends: ['markdown/recommended'],
	},

	// CSS configuration
	{
		files: ['**/*.css'],
		plugins: { css },
		language: 'css/css',
		extends: ['css/recommended'],
	},

	// Global settings (applies to all files)
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
]);
