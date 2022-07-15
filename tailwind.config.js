/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light-cornflower-blue': "#8ECAE6",
      'light-cornflower-blue-200': 'rgba(142, 202, 230, 0.20)',
      'blue-green': "#219EBC",
      'prussian-blue': '#023047',
      'selective-yellow': '#FFB703',
      'tangerine': '#FB8500',
      'tangerine-200': 'rgba(251, 133, 0, 0.20)',
      'coconut': '#FFF',
    },
    container: {
      screens: {
        md: '600px',
        lg: '728px',
        xl: '984px',
        '2xl': '1152px',
      },
    }
  },
  plugins: [],
}
