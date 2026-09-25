/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Hind', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          300: '#c9c0f7',
          400: '#8478ef',
          500: '#5b4fe0',
          600: '#4636c9',
        },
        ink: {
          700: '#6b6560',
          800: '#2a2419',
          900: '#1c1712',
          950: '#15130f',
        },
        cream: {
          50: '#fffdfb',
          100: '#fdf6ef',
          200: '#fbeee1',
        },
        teal: {
          500: '#25d366',
          600: '#1ebe5a',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #fbeee1 0%, #fdf6ef 55%, #fffdfb 100%)',
        'accent-gradient': 'linear-gradient(135deg, #8478ef, #4636c9)',
        'dark-gradient': 'linear-gradient(135deg, #2a2419, #15130f)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
          '50%': { transform: 'translateY(-12px) rotateY(3deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulse3d: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(132,120,239,0.4)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 0 15px rgba(132,120,239,0)' },
        },
        rotateBg: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.7s ease forwards',
        slideInLeft: 'slideInLeft 0.7s ease forwards',
        slideInRight: 'slideInRight 0.7s ease forwards',
        scaleIn: 'scaleIn 0.5s ease forwards',
        pulse3d: 'pulse3d 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      perspective: {
        '500': '500px',
        '800': '800px',
        '1000': '1000px',
      },
      boxShadow: {
        '3d': '0 25px 60px -15px rgba(91,79,224,0.4), 0 8px 25px -8px rgba(0,0,0,0.2)',
        'card': '0 20px 50px -15px rgba(21,19,15,0.15), 0 4px 15px -4px rgba(0,0,0,0.08)',
        'card-hover': '0 30px 70px -15px rgba(91,79,224,0.3), 0 8px 25px -5px rgba(0,0,0,0.15)',
        'glow': '0 0 30px rgba(132,120,239,0.5)',
        'glow-sm': '0 0 15px rgba(132,120,239,0.3)',
        'wa': '0 10px 30px -8px rgba(37,211,102,0.5)',
      },
    },
  },
  plugins: [],
}
