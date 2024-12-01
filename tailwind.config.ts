/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
  },

  plugins: [require('@tailwindcss/aspect-ratio')],
} satisfies Config;
