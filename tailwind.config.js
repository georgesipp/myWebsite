/** @type {import('tailwindcss').Config} */

import fluid, { extract } from 'fluid-tailwind'

const daisyui = require('daisyui')
const defaultTheme = require('tailwindcss/defaultTheme')
const fluid = require('fluid-tailwind')



export default {
  content: {
    files: ['./src/**/*.{html,svelte,js,ts}'],
    extract
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: '20rem',
      lg: '64rem',
      xl: '80rem',
      xxl: '96rem'


    },
  },
  plugins: [require('@tailwindcss/typography'),daisyui, fluid],


  
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#DFA367",
          "secondary": "#14453D",
          "accent": "#475657",
          "neutral": "#DCD7D0",
          "base-100": "#8A8A8A",

        },
      },
    ],
  },

}