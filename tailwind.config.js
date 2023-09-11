module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./dist/**/*.{html,js}",
    ],
    theme: {
        extend: {
            
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}

