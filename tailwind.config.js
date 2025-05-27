/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f6f4',
          100: '#e8e0d9',
          200: '#d7c6b8',
          300: '#c4a892',
          400: '#b08f75',
          500: '#a1785e',
          600: '#8c624c',
          700: '#704d3e',
          800: '#573c32',
          900: '#402e27',
        },
        secondary: {
          50: '#f5f7f8',
          100: '#e0e8ed',
          200: '#c1d2dc',
          300: '#99b7c7',
          400: '#729aae',
          500: '#567e94',
          600: '#426279',
          700: '#364f62',
          800: '#2d3e4d',
          900: '#263039',
        },
        accent: {
          50: '#fbf7f2',
          100: '#f3e7d4',
          200: '#e8cfa9',
          300: '#dbb277',
          400: '#cf9650',
          500: '#bf7c32',
          600: '#a46227',
          700: '#844c22',
          800: '#683c20',
          900: '#52301c',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}