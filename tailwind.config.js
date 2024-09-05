/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // to create customised breaking points apart from sm, md, lg, xl for making application responsive also for small mobiles and large laptops.
      screens: {
        mobileM: "375px",
        laptopL: "1440px",
      },
    },
  },
  plugins: [],
};
