/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(179, 62%, 43%)",
          brightYellow: "hsl(71, 73%, 54%)",
        },
        neutral: {
          lightGray: "hsl(204, 43%, 93%)",
          grayishBlue: "hsl(218, 22%, 67%)",
        },
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      boxShadow: {
        boxShadow: "0 15px 20px 0 hsla(218, 22%, 67%, 0.25)",
      },
      fontSize: {
        s: ["0.8rem", "1.5rem"],
      },
    },
  },
  plugins: [],
};
