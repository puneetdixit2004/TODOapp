module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#E9D5FF', // light purple
            DEFAULT: '#A78BFA', // main purple
            dark: '#7C3AED', // deep purple
          },
          accent: '#C4B5FD', // accent purple
        },
      },
    },
    plugins: [],
  }
