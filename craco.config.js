module.exports = {
  mode: 'development',
  // Adding Server
  devServer: {
    port: 8001,
  },
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}