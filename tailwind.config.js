const colors = require('tailwindcss/colors');

/**
 * @see https://www.nordtheme.com/docs/colors-and-palettes
 */
const nordColor = {
  polarNight: {
    '300': '#4c566a',
    '500': '#434c5e',
    '700': '#3b4252',
    '900': '#2e3440',
  },
  snowStorm: {
    '200': '#eceff4',
    '500': '#e5e9f0',
    '800': '#d8dee9',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    textColor: {
      primary: `var(--text-color-primary, ${nordColor.polarNight[300]})`,
      ...nordColor,
      ...colors,
    },
    backgroundColor: {
      primary: `var(--bg-color-primary, ${nordColor.snowStorm[200]})`,
      ...nordColor,
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
