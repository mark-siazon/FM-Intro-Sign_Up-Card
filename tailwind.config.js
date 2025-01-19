/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-bg': "url('/bg-intro-desktop.png')",
        'mobile-bg': "url('/bg-intro-mobile.png')",
      },
      colors: {
        primary: {
          red: 'hsl(0, 100%, 74%)',
          green: 'hsl(154, 59%, 51%)',
        },
        accent: {
          blue: 'hsl(248, 32%, 49%)',
          darkgreen: 'hsl(154, 59%, 47%)',
        },
        neutral: {
          darkBlue: 'hsl(249, 10%, 26%)',
          grayishBlue: 'hsl(246, 25%, 77%)',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        body: '16px',
      },
      rounded: {
        md: '6px',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-synthesis-none': {
          'font-synthesis': 'none',
        },
        '.text-rendering-optimize': {
          'text-rendering': 'optimizeLegibility',
        },
      });
    },
  ],
};