import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@trilogy-ds/react/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors: {
        'test-blue': '#25465F',
        'test-grey': "#F4F4F4"
      },
    },
  },
  plugins: [],
} satisfies Config;
