import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {pattern: /justify-./},
    {pattern: /items-./},
    {pattern: /w-./},
    {pattern: /h-./},
    {pattern: /gap-./},
    {pattern: /text-./},
    {pattern: /font-./},
    {pattern: /bg-./}
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pizz' : 'url("../assets/images/SaaS.png")',
        'splitter' : 'url("../assets/images/Sprite.png")',
        'gol' : 'url("../assets/images/conways.jpg")',
        'pacman' : 'url("../assets/images/pacman.png")',
        'read' : 'url("../assets/images/read.jpeg")',
        'code' : 'url("../assets/images/code.png")',
        'language' : 'url("../assets/images/language.png")',
        'walk' : 'url("../assets/images/walk.jpeg")',
      },
    },
  },
  plugins: [],
}
export default config
