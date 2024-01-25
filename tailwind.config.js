/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hls(12, 88%, 59%)',
        brightRedLight: 'hls(12, 88%, 69%)',
        brightRedSupLight: 'hls(12, 88%, 95%)',
        darkBlue: 'hls(228, 39%, 23%)',
        brightGrayishBlue: 'hls(227, 12%, 61%)',
        veryDarkBlue: 'hls(233, 12%, 13%)',
        veryPaleRed: 'hls(13, 100%, 96%)',
        veryLightGray: 'hls(0, 0%, 98%)',
      }
    }
  },
  plugins: []
}
