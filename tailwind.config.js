module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg-emerald-50": "#e9f3ef",
        "bg-emerald-400": "#9ceedd",
        "bg-orange-50": "#fdf6e1",
        "text-gray-50":"#B3B3B3",
        "text-gray-100":"#5C5F5E",
        "bg-violet-50":"#EAEBF6",
        "bg-amber-50":"#EAEBF6",
        "bg-emerald-200":"#DDF7EC",
        "bg-gray-50":"#e9f3ef",
      },
      spacing: {
        38: "152px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
