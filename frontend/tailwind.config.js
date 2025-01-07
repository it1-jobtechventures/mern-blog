/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        fall: 'fall 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fall: {
          '0%': {
            transform: 'translateY(-100vh) rotate(45deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0) rotate(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}

