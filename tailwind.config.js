module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        emeraid: {
          50: "#e9f3ef",
        },
        gray: {
          50: "#B3B3B3",
          100: "#5C5F5E",
          200: "#e3eae3",
        },
      },
      backgroundColor: {
        emeraid: {
          50: "#e9f3ef",
          100: "#cde8e1",
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
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
