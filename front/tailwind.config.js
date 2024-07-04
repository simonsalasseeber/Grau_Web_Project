/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'atle-haas-bold': ['AtleHaasBold', 'sans-serif'],
        'atle-haas-regular': ['AtleHaasRegular', 'sans-serif'],
        'monumental-extended-black': ['MonumentalExtendedBlack', 'sans-serif'],
        'monumental-extended-light': ['MonumentalExtendedLight', 'sans-serif'],
        'monumental-extended-regular': ['MonumentalExtendedRegular', 'sans-serif'],
        'pp-editorial-new-italic': ['PPEditorialNew-Italic', 'serif'],
        'pp-editorial-new-regular': ['PPEditorialNew-Regular', 'serif'],
        'pp-editorial-new-ultralight': ['PPEditorialNew-Ultralight', 'serif'],
        'pp-editorial-new-ultralight-italic': ['PPEditorialNew-UltralightItalic', 'serif'],
      },
    },
  },
  plugins: [],
}