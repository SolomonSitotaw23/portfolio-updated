/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      baunk: ['baunk'],
      'space-grotesk': 'Space Grotesk',
    },
    extend: {
      dropShadow: {
        glow: [
          '0 0px 20px rgba(0,45, 149, 0.55)',
          '0 0px 65px rgba(0, 45,149, 0.3)',
        ],
      },

      colors: {
        primary_custom: '#011627',
        primary_dark: '#011221',
        primary_border: '#1E2D3D',
        secondary: '#607B96',
        white_: '#E8E6E6',
        white_border: '#DEDCDC',
        'title-blue': '#4D5BCE',
        glow_blue: '#4D5BCE',
        button_active: '#FEA55F',
        button_bg: '#1C2B3A',
      },

      fontFace: {
        baunk: {
          fontFamily: 'baunk',
          fontWeight: 'normal',
          fontStyle: 'normal',
          src: ['url("../../public/fonts/Baunk.ttf") format("truetype")'],
        },
      },
    },
  },
  plugins: [],
};
