/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],

    theme: {
        extend: {},
        colors: {
            background: "#fff7ea",
            secondary: "#fbb5bf",
            primary: "#c13b34",
            secondary2: "#fb7f79",
            white: "#ffffff",
            black: "#000000"
        },
        flex: {
            1: "1 1 0%",
            2: "2 2 0%",
            3: "3 3 0%",
            4: "4 4 0%",
            5: "5 5 0%",
            6: "6 6 0%",
            7: "7 7 0%",
            8: "8 8 0%",
            9: "9 9 0%",
            10: "10 10 0%"
        }
    },
    plugins: []
}
