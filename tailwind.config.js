/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Dana : 'Dana' ,
        DanaMedium : 'Dana Medium',
        DanaBold : 'Dana Bold'
      }
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant('children','&>*')
      }
  ],
}

