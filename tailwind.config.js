module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateRows: {
                7: "repeat(7, minmax(0, 1fr))",
                8: "repeat(8, minmax(0, 1fr))",
            },
        },
    },
    plugins: [],
};
