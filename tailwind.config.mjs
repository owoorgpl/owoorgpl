/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                owopurple: {
                    500: '#9c4ec6',
                    700: '#3d1652',
                    800: '#421858',
                    900: '#2d0c3d',
                },
                owoblue: {
                    200: '#C2F9FF'
                },
                owowhite: '#FEFEFE'
            }
        },
        fontFamily: {
            city: ["city", "Clarity City"],
            // hand: ["hand", "Hand Me Down"],
            hand: ["hand", "Coming Soon"],
        }
    },
    plugins: [
        require("tailwindcss-animate"),
        require("tailwindcss-animation-delay")
    ],
}
