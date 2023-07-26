/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                PrimaryDark: '#060B27',
                PrimaryHover: '#344054',
                PrimaryActive: '#101828',
                PrimaryDisabled: '#EAECF0',
                SecondaryHover: '#F2F4F7',
                BorderGray: '#D0D5DD',
                InputError: '#F97066',
            },
            fontFamily: {
                euclid: 'Euclid Circular A',
            },
        },
    },
    plugins: [],
}