/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                owopurple: {
                    500: '#6E3C8F',
                    800: '#49295E'
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
    plugins: [],
}
