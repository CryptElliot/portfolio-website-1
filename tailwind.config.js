/** @type {import('tailwindcss').Config}  */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: withOpacity('--primary-main'),
        secondary: withOpacity('--primary-light'),

        paper: withOpacity('--background-main'),
        default: withOpacity('--background-light'),

        textPrimary: withOpacity('--text-main'),
        textSecondary: withOpacity('--text-light'),
      },
      boxShadow: {
        normal: "var(--box-shadow-normal)",
      },
    },
  },
  plugins: [],
}