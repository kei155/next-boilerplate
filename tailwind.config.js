const plugin = require('tailwindcss/plugin')

function range(start, end) {
  const array = []
  for (let i = start; i < end; ++i) {
    array.push(i)
  }
  return array
}
const pxToRem = (px, base = 16) => `${px / base}rem`

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A4F7A',
        secondary: '#FFC6D3',
        backup: '#FEA1BF',
        backback: '#E98EAD'
      },
      animation: {
        enter: 'enter 1s linear',
        leave: 'leave 1s linear'
      },
      keyframes: {
        enter: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        leave: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      }
    },

    spacing: {
      ...range(0, 101).reduce((acc, px) => {
        acc[`${px}pxr`] = pxToRem(px)
        return acc
      }, {})
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    plugin(({ addUtilities, addVariant }) => {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })

      addVariant('search-cancel', '&::-webkit-search-cancel-button')
    })
  ]
}
