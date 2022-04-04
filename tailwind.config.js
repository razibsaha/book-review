module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "darkMode: 'className'",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}
