/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ar-red': '#B91C1C',
        'ar-red-dark': '#991B1B',
        'ar-red-light': '#DC2626',
        'ar-black': '#111111',
        'ar-gray': '#1F2937',
        'ar-gray-light': '#374151',
        'ar-light': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
