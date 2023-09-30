module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        emeraid: {
          50: "#cde8e1",
        },
        gray: {
          50: "#B3B3B3",
          100: "#5C5F5E",
        },
      },
      backgroundColor: {
        emeraid: {
          50: "#cde8e1",
          100: "#e3eae3",
          200: "#DDF7EC",
          400: "#9ceedd",
        },
        orange: {
          50: "#fdf6e1",
        },
        amber: {
          50: "#EAEBF6",
        },
        yellow: {
          300: "#f8e467",
        },
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
