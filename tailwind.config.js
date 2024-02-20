/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      'umbrl-blue': '#473BF0',
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    
    fontSize: {
      xs:['12px','20px'],
      sm: ['14px', '20px'],
      base: ['17px', '24px'],
      intro:['19px','32'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],

    },
    screens: {
      
      'sm': '325px',
      // => @media (min-width: 576px) { ... }
    
      'md': '567px',
      // => @media (min-width: 768px) { ... }
    
      'lg': '745px',
      // => @media (min-width: 992px) { ... }
    
      'xl': '1023px',
      // => @media (min-width: 1200px) { ... }
    },
   

  },
  plugins: [],
};
