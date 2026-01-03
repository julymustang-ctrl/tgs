import type { Config } from 'tailwindcss'

export default {
    darkMode: 'class',
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            colors: {
                taxi: {
                    yellow: '#FFD600',
                    'yellow-dark': '#FFC107',
                    'yellow-light': '#FFE44D',
                    gold: '#FFAB00'
                },
                charcoal: {
                    DEFAULT: '#1A1A1A',
                    light: '#2D2D2D',
                    dark: '#0D0D0D'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Poppins', 'system-ui', 'sans-serif']
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'slide-up': 'slide-up 0.5s ease-out',
                'car-move': 'car-move 20s linear infinite',
                'dot-blink': 'dot-blink 2s ease-in-out infinite'
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(255, 214, 0, 0.4), 0 0 40px rgba(255, 214, 0, 0.2)'
                    },
                    '50%': {
                        boxShadow: '0 0 30px rgba(255, 214, 0, 0.6), 0 0 60px rgba(255, 214, 0, 0.3)'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)',
                    },
                    '25%': {
                        transform: 'translateY(-12px) rotateX(2deg) rotateY(-2deg)',
                    },
                    '50%': {
                        transform: 'translateY(-20px) rotateX(0deg) rotateY(2deg)',
                    },
                    '75%': {
                        transform: 'translateY(-8px) rotateX(-2deg) rotateY(-1deg)',
                    }
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                'car-move': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100vw)' }
                },
                'dot-blink': {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '1' }
                }
            },
            backdropBlur: {
                xs: '2px'
            }
        }
    },
    plugins: []
} satisfies Config
