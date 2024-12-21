/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      small:'500px',
      medium:'600px',
      large: '1024px'
    },
    extend: {},
  },
  plugins: [],
};

