/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}', './index.html'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '769px',
        // => @media (min-width: 769px) { ... }

        lg: '901px',
        // => @media (min-width: 901px) { ... }

        xl: '1025px',
        // => @media (min-width: 1025px) { ... }
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', 'system-ui'],
        'sans-helvetica': ['Open Sans', 'Helvetica', 'Arial', 'sans-serif', 'system-ui'],
        title: ['Raleway'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        heroCTA: 'linear-gradient(90deg,#6ce8db,#d578d7 16.7%,#ed6f71 33.3%,#f6cc4c 50%,#ed6f71 66.7%,#d578d7 83.3%,#6ce8db)',
      },
      backgroundSize: {
        heroCTA: '400% 400%',
        newPage: '50%',
      },
      backgroundPosition: {
        'top-10px-right': 'top 10px right',
        'right-100px-center': 'right -100px center',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        heroCTAGradient: {
          '0%': { backgroundPosition: '0 50%' },
          '100%': { backgroundPosition: '-400% 50%' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'infinite-scroll-2': {
          '0%': { transform: 'translateX(-10%)' },
          '50%': { transform: 'translateX(-80%)' },
          '100%': { transform: 'translateX(-10%)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        heroCTA: 'heroCTAGradient 20s linear infinite',
        // , heroCTAFadeIn 1s ease-out',
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
        'infinite-scroll-2': 'infinite-scroll-2 2000s linear infinite',
        slideIn: 'slideIn 0.3s forwards',
        slideOut: 'slideOut 0.3s forwards',
      },
      gridTemplateColumns: {
        'custom-repeat': 'repeat(2, calc((100% - 96px) / 2))',
        'custom-repeat-lg': 'repeat(3, calc((100% - 96px) / 3))',
      },
      width: {
        custom: 'calc(100% - 128px)',
      },
      boxShadow: {
        custom: '0 8px 24px 0 rgba(83,228,220,.3)',
        custom2: '3px 3px 3px rgba(49,52,62,.3)',
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')],
}
