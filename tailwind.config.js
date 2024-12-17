/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PixelSans: ['IMB Pixel Sans', 'sans-serif']
      },
      fontWeight: {
        extraLight: 200,
        regular: 400,
        medium: 500,
        semiBold: 600,
      },
      backgroundColor: {
        body: '#141332',
        card: '#1d1d41'
      }
    },
  },
  plugins: [],
}