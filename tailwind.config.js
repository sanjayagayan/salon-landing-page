/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('/src/assets/heroImage.png')",
      }),
    },
    colors: {
      'primary-color': '#C4C3DB',
      'secondary-color': '#EED1D6',
    },
    fontFamily: {
      custom: ['CustomFont', 'sans-serif'],
      custom2: ['ABeeZee', 'sans-serif'],
      custom3: ['Southam Demo','sans-serif'],
    },
  },
  plugins: [],
}

