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
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A4F7A',
        secondary: '#FFC6D3',
        backup: '#FEA1BF',
        backback: '#E98EAD'
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
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ]
}
