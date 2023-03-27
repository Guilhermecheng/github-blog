/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        "cover-background": "url('/cover.png')",
      },
      colors: {
        "base-input": "#040F1A",
        "base-background": "#071422",
        "base-profile": "#0B1B2B",
        "base-post": "#112131",
        "base-border": "#1C2F41",
        "base-label": "#3A536B",
        "base-span": "#7B96B2",
        "base-text": "#AFC2D4",
        "base-subtitle": "#C4D4E3",
        "base-title": "#E7EDF4",
        "blue": "#3294F8",
      },
      typography: ({ theme }) => ({
        blue: {
          css: {
            '--tw-prose-body': theme('colors.base-text'),
            '--tw-prose-headings': theme('colors.base-title'),
            '--tw-prose-lead': theme('colors.blue'),
            '--tw-prose-links': theme('colors.blue'),
            '--tw-prose-bold': theme('colors.blue'),
            '--tw-prose-counters': theme('colors.blue'),
            '--tw-prose-bullets': theme('colors.base-title'),
            // '--tw-prose-hr': theme('colors.pink[300]'),
            // '--tw-prose-quotes': theme('colors.blue'),
            // '--tw-prose-quote-borders': theme('colors.pink[300]'),
            // '--tw-prose-captions': theme('colors.blue'),
            // '--tw-prose-code': theme('colors.blue'),
            // '--tw-prose-pre-code': theme('colors.base-text'),
            // '--tw-prose-pre-bg': theme('colors.blue'),
            // '--tw-prose-th-borders': theme('colors.pink[300]'),
            // '--tw-prose-td-borders': theme('colors.pink[200]'),
          }
        }
      })
    },
    theme: {
      screens: {
        tablet: '640px',
        laptop: '1024px',
        'twelve-hundred': '1200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};