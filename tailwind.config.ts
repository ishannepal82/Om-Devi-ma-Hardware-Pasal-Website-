import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: '#23317d',
        secondary: '#303f9f',
        secondaryLight: '#303fa0',
        accentDark: '#1a2878',
        accentLight: '#ff6916',
        grayLight: '#d3d3d3',
        white: '#ffffff',
        offWhite: '#f7f7f7',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Ultra HD Desktop Scaling (15-25% larger than mobile)
        'header': ['24px', { lineHeight: '32px', fontWeight: '400' }],
        'h1': ['52px', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['34px', { lineHeight: '1.25', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.35', fontWeight: '700' }],
        'h4': ['24px', { lineHeight: '1.45', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'sm': ['16px', { lineHeight: '1.6', fontWeight: '300' }],
        'btn': ['18px', { lineHeight: '26px', fontWeight: '600' }],
        'xl': ['64px', { lineHeight: '1.1', fontWeight: '800' }], // Hero section
        '2xl': ['80px', { lineHeight: '1.05', fontWeight: '800' }], // Ultra-HD headlines
      },
      fontWeight: {
        'extra-light': '200',
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        'extra-bold': '800',
      },
      screens: {
        'ultra-hd': '2560px', // Custom breakpoint for 1440p+ displays
        '4k': '3840px',        // True 4K resolution
        '8k': '7680px'         // Future-proof for 8K
      }
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
}

export default config