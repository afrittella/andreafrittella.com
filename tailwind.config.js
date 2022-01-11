module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ['Orbitron', 'sans-serif'],
        Oxanium: ['Oxanium', 'cursive'],
      },
      screens: {
        'land': {raw: '(max-height: 800px)'},
      }
    },
  },
  plugins: [],
}
