/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#882225', // Deep Red from PRD
                primaryDark: '#6b1b1d',
                secondary: '#CEB776', // Gold from PRD
                accent: '#C93535', // Bright Red
                light: '#F8F5F0', // Warm Off-white
                dark: '#1A1A1A',
                'review-bg': '#EBE5DA',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Poppins"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
