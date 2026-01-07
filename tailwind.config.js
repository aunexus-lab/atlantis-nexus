/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'nexus-blue': '#00f0ff',
                'nexus-dark': '#0a0a10',
                'academic-bg': '#ffffff',
                'academic-paper': '#f8f9fa',
                'academic-text': '#1a1a1a',
                'academic-sub': '#4a5568',
                'academic-accent': '#2d3748',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Georgia', 'serif'],
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
                        h1: { fontSize: '2.5rem' },
                        h2: { marginTop: '1.5em', marginBottom: '0.8em' },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
