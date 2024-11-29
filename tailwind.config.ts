import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@trilogy-ds/react/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx,mdx}"

  ],
  theme: {
    extend: {
      colors: {
        'test-blue': '#25465F',
        'test-grey': "#F4F4F4",
        'test-dark': "#E4EAED",
        'test-ligh-blue': "#0C7B91"
      },
      fontFamily: {
        bouygues: ['var(--font-bouygues)', 'sans-serif'], // 'custom' is the class name, 'sans-serif' is the fallback
      },
    },
  },
  plugins: [],
} satisfies Config;
