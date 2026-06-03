import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8B1D2D', // Crimson
                secondary: '#CEB776', // Gold
                dark: '#2A2E37', // Dark Gray
                'near-black': '#070707', // Body headings
                'light-cream': '#F8F5F0', // Light bg
                'warm-beige': '#EBE5DE', // Alternate bg
                accent: '#8B1D2D',
                'review-bg': '#EBE5DE',
            },
            fontFamily: {
                poppins: ['var(--font-poppins)', 'sans-serif'],
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-poppins)', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
