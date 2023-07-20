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
                SecondaryActive: 'box-shadow: 0px 0px 0px 4px #F2F4F7, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                BorderGray: '#D0D5DD',
            },
            fontFamily: {
                euclid: 'Euclid Circular A',
            },
        },
    },
    plugins: [],
}