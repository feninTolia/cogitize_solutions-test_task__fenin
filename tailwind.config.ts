import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-texture':
          "linear-gradient(0deg, rgba(38, 37, 52, 0.72) 0%, rgba(38, 37, 52, 0.72) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.24) 100%), url('/img/main-texture.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
