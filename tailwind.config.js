/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // textColor: "#000",
        // backgroundColor: "#176B87",
        // cardBackgroundColor: "#e5e7eb"
        textColor: "#fff",
        backgroundColor: "#F5F5F5",
        cardBackgroundColor: "#333333"
      },
    },
  },
  plugins: [],
}
