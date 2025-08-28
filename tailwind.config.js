// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maskImage: {
        'iso': 'url("/SVG/iso.svg")',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};