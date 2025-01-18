/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.ejs',   // For EJS files in the views directory
    './public/**/*.html',  //If you have static HTML files
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

