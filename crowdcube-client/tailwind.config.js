import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
      colors: {
        primary: "#16425B",
        secondary: "#2F6690",
        tertiary: "#3A7CA5",
        fourth: "#81C3D7",
        fifth: "#D9DCD6",
      }
    },
  },
  daisyui: {
    themes: ['light', 'dark']
  },
  plugins: [daisyui],
}

