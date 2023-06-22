/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,js}"],
  },
  theme: {
    extend: {
      colors: {
        "dark-blue": "#013243",
        "light-blue": "#82BBCF",
        "light-gray": "#A7A7A7",
      },
      backgroundImage: {
        body: 'url("../images/Background.png")',
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        33: "33px",
        34: "34px",
      },
      maxWidth: {
        445: "445px",
        860: "860px",
        70: "70%",
        85: "85%",
      },
      padding: {
        41: "41px",
      },
    },
  },
  plugins: [],
};
