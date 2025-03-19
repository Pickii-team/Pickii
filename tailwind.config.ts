/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require('tailwindcss-preset-px-to-rem')],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        primary: '#D6D0FC',
        primaryVariant: '#8A79F6',
        secondary: '#FEECBA',
        secondaryVariant: '#FDD76F',
        background: '#FFFFFF',
        surface: '#F8F7FC',
        error: '#FF6B6B',
        onPrimary: '#FFFFFF',
        onBackground: '#5C5C5C',
        'gray-1': '#FAFAFA',
        'gray-2': '#F5F5F5',
        'gray-3': '#EEEEEE',
        'gray-4': '#E0E0E0',
        'gray-5': '#BDBDBDED',
        'gray-6': '#9E9E9E',
        'gray-7': '#757575',
        'gray-8': '#5C5C5C',
        'gray-9': '#424242',
        'gray-10': '#212121',
      },
      backgroundImage: {
        'image-overlay':
          'linear-gradient(to top, rgba(0, 0, 0, 0.6) 32%, rgba(34, 34, 34, 0.3) 74%, rgba(170, 170, 170, 0.13) 100%)',
      },
      boxShadow: {
        elevation1: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        elevation2:
          '0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        'head-01': ['36px', { lineHeight: '140%', fontWeight: 'bold' }],
        'head-02': ['24px', { lineHeight: '140%', fontWeight: 'bold' }],
        'title-01': ['24px', { lineHeight: '140%', fontWeight: 'bold' }],
        'title-02': ['20px', { lineHeight: '140%', fontWeight: 'bold' }],
        'title-03': ['18px', { lineHeight: '140%', fontWeight: 'bold' }],
        'title-04': ['16px', { lineHeight: '140%', fontWeight: 'bold' }],
        'large-01': ['18px', { lineHeight: '150%', fontWeight: 'medium' }],
        'large-02': ['18px', { lineHeight: '150%', fontWeight: 'regular' }],
        'medium-01': ['16px', { lineHeight: '150%', fontWeight: 'medium' }],
        'medium-02': ['16px', { lineHeight: '150%', fontWeight: 'regular' }],
        'small-01': ['14px', { lineHeight: '150%', fontWeight: 'medium' }],
        'small-02': ['14px', { lineHeight: '150%', fontWeight: 'regular' }],
        'caption-01': ['12px', { lineHeight: '150%', fontWeight: 'medium' }],
        'caption-02': ['12px', { lineHeight: '150%', fontWeight: 'regular' }],
      },
    },
  },
  plugins: [],
};
