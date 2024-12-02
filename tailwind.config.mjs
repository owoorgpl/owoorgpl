/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                owopurple: {
                    500: '#9c4ec6',
                    800: '#3d1652',
                    900: '#421858'
                },
                owoblue: {
                    200: '#C2F9FF'
                },
                owowhite: '#FEFEFE'
            }
        },
        fontFamily: {
            city: ["city", "Clarity City"],
        }
    },
    plugins: [
        require("tailwindcss-animate"),
        require("tailwindcss-animation-delay")
    ],
}
