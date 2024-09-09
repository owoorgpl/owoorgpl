/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                owopurple: {
                    500: '#523c61',
                    800: '#24162f'
                }
            }
        }
    },
    plugins: [],
}
