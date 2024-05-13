/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#282828",
          "200": "#242424",
          "300": "rgba(255, 255, 255, 0.2)",
        },
        silver: {
          "100": "#b5b5b5",
          "200": "rgba(181, 181, 181, 0.5)",
        },
        tomato: {
          "100": "#d15439",
          "200": "rgba(209, 84, 57, 0.18)",
        },
        steelblue: "#5a92cb",
        whitesmoke: "#ebe9e8",
        white: "#fff",
        darkslategray: "#3d3d3d",
        cadetblue: "#63a7a7",
        darkseagreen: "#81b47d",
        mediumorchid: "#9e4cb8",
        aliceblue: "#e1eaf2",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        poppins: "Poppins",
        montserrat: "Montserrat",
        roboto: "Roboto",
      },
      borderRadius: {
        "19xl": "38px",
        "3xs-6": "9.6px",
        "6xs-4": "6.4px",
        "3xs-5": "9.5px",
      },
    },
    fontSize: {
      "3xs": "10px",
      "5xs": "8px",
      sm: "14px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
