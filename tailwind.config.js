/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'nexus-blue': '#00f0ff', // Keep as accent if needed, but rarely use
                'nexus-dark': '#0a0a10', // Keep for reference or dark mode toggle if requested later
                'academic-bg': '#ffffff',
                'academic-paper': '#f8f9fa',
                'academic-text': '#1a1a1a',
                'academic-sub': '#4a5568',
                'academic-accent': '#2d3748', // Dark grey for elegant accents
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Georgia', 'serif'], // Good for "Academic" headers if we want to mix
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.academic-text'),
                        a: {
                            color: theme('colors.academic-accent'),
                            '&:hover': {
                                color: theme('colors.academic-text'),
                            },
                        },
                    },
                },
            }),
        },
    },
    plugins: [],
}
