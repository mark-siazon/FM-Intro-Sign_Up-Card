/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-bg': "url('./src/assets/bg-intro-desktop.png')",
        'mobile-bg': "url('./src/assets/bg-intro-mobile.png')",
      },
      colors: {
        primary: {
          red: 'hsl(0, 100%, 74%)',
          green: 'hsl(154, 59%, 51%)',
        },
        accent: {
          blue: 'hsl(248, 32%, 49%)',
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
      boxShadow: {
        custom: '0px 6px 12px 1px #C2D3FF',
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