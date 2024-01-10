/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'perfume': "url('./product-preview-card-component-main/design/image-product.jpg')",
      }
    },
  },
  plugins: [],
}
