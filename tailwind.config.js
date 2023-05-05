/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js"
  ],
   darkMode: 'media',
    theme: {
        extend: {
            colors: {
                gray: {
                    100: "#FBFBFB",
                    200: "#EAEAEA",
                    300: "#DFDFDF",
                    400: "#999999",
                    500: "#7F7F7F",
                    600: "#666666",
                    700: "#4C4C4C",
                    800: "#333333",
                    900: "#191919",
                },
                blue: {
                    50: "#DDE6FB",
                    100: "#C6D6F9",
                    200: "#98B4F4",
                    300: "#6A92EF",
                    400: "#3C71EA",
                    500: "#1853DB",
                    600: "#1342AD",
                    700: "#0E307F",
                    800: "#091F51",
                    900: "#040D23",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.16)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
        default: "0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        none: "none",
    },
    fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        mono: ["Space Grotesk", ...defaultTheme.fontFamily.mono],
    },
}