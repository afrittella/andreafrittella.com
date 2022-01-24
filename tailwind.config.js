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
        xs: { raw: '(min-width: 430px)' },
        land: { raw: '(max-height: 800px)' },
      },
      colors: {
        beatport: '#01FF95',
        facebook: '#1877F2',
        instagram: '#E4405F',
        mixcloud: '#5000FF',
        soundcloud: '#FF3300',
        twitter: '#1DA1F2',
        youtube: '#FF0000',
      },
      keyframes: {
        progress: {
          '0%': { width: '100%'},
          '100%': { width: '0%'},
        },
      },
      animation: {
        progress: 'progress 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
