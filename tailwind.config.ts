import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-pallete': '#000814',
        'blue-pallete': '#3a8ba9',
        'red-pallete': '#ec4e39',
        'white-pallete': '#FAF7FF',
        'stone-pallete': '#2D2B39',
      },
    },
  },
  plugins: [],
}
export default config
