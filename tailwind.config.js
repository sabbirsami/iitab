/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#F7941D",
                primaryBackground: "#0E0F12",
            },
        },
    },
    plugins: [],
};
