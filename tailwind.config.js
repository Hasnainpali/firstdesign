/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
          sm:'576px',
          md:'969px',
          lg:'1520px',
         
    },
    extend: {},
  },
  plugins: [],
}

