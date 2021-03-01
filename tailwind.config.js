/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      screens: {},
      lineHeight: {
       'extra-tight': '1.1',
      },
      fontSize: {
        'md': '1.075rem',
      },
      fontFamily: {
        'sans': ['soehne-buch', '-apple-system', 'BlinkMacSystemFont'],
        'sans-medium': ['soehne-kraftig', '-apple-system', 'BlinkMacSystemFont'],
        'sans-bold': ['soehne-halbfett', '-apple-system', 'BlinkMacSystemFont'],
        'alt-40': ['Astro-40', 'soehne-buch', '-apple-system', 'BlinkMacSystemFont'],
        'alt-60': ['Astro-60', 'soehne-kraftig', '-apple-system', 'BlinkMacSystemFont'],
        'serif': ['CooperMd', 'soehne-kraftig', '-apple-system', 'BlinkMacSystemFont'],
      },
      spacing: {},
      letterSpacing: {},
      colors: {
        // gray: colors.trueGray,
        // line: colors.lime,
        // teal: colors.teal,
        // cyan: colors.cyan,
        // lightBlue: colors.lightBlue,
        // indigo: colors.indigo,
        // violet: colors.violet,
        // fuschia: colors.fuschia,
        // rose: colors.rose,
        // orange: colors.orange,
        // amber: colors.amber,

        'charcoal': {
          50: '#f1f1f1',
          100: '#E9E9E9',
          200: '#C7C7C7',
          300: '#A5A5A5',
          350: '#9c9c9c',
          400: '#626262',
          500: '#454543',
          550: '#3b3b39', // new main
          600: '#2d2d2c', // new main
          650: '#242423', // new main
          700: '#1F1F1E', // main
          750: '#1B1B1A', // new halfway for case study bg pieces on bg-charcoal-700 or bg-terrain
          800: '#0E0E0E',
          900: '#090909',
        },
        'bone': {
          100: '#FFFEFE',
          200: '#FEFEFD',
          300: '#FDFDFC',
          400: '#FCFBF9',
          500: '#FAF9F7', // main
          550: '#f2f0eb',
          600: '#E1E0DE',
          650: '#F0F0EF', // new bg lines color
          700: '#969594',
          800: '#71706F',
          900: '#4B4B4A',
        },
        'ember': {
          100: '#F8F1E9',
          200: '#EDDDC9',
          300: '#E3C8A8',
          400: '#CD9E67',
          500: '#B87526',// main
          600: '#A66922',
          700: '#6E4617',
          800: '#533511',
          900: '#37230B',
          950: '#25190b',
        },
        'solar': {
          100: '#FEF7EE',
          200: '#FCECD4',
          300: '#F9E0BA',
          400: '#F5C987',
          500: '#F1B253',// main
          600: '#D9A04B',
          700: '#916B32',
          800: '#6C5025',
          900: '#483519',
        },
        'iris': {
          100: '#EFF1FB',
          200: '#D7DCF4',
          300: '#BFC7EE',
          400: '#8F9EE1',
          500: '#5F74D4',// main
          600: '#4a5baf',
          700: '#39467F',
          800: '#2B345F',
          900: '#1D2340',
          950: '#1a1c24',
        }
      }
    }
  },
  variants: {},
  plugins: [
    // require('@tailwindcss/typography')
  ],
}
