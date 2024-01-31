/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Dana: ["Dana", "sans-serif"],
      DanaMedium: ["Dana-Medium", "sans-serif"],
      DanaDemiBold: ["Dana-DemiBold", "sans-serif"],
      Morabba: ["Morabba", "sans-serif"],
      MorabbaMedium: ["Morraba-Medium", "sans-serif"],
      MorabbaBold: ["Morabba-Bold", "sans-serif"],
    },
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        "shadow-normal": "0 1 10px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        icon: "2.125rem",
      },
      letterSpacing: {
        tightest: "-1.3px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", ["& > *"]);
      addVariant("child-hover", ["& > *:hover"]);
    },
  ],
};
