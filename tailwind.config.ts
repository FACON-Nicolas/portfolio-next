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
    {pattern: /font-bold/},
    {pattern: /bg-i_./}
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'i_pizz' : 'url("../assets/images/SaaS.png")',
        'i_splitter' : 'url("../assets/images/Sprite.png")',
        'i_gol' : 'url("../assets/images/conways.jpg")',
        'i_pacman' : 'url("../assets/images/pacman.png")',
        'i_read' : 'url("../assets/images/read.jpeg")',
        'i_code' : 'url("../assets/images/code.png")',
        'i_language' : 'url("../assets/images/language.png")',
        'i_walk' : 'url("../assets/images/walk.jpeg")',
        'i_louvre' : 'url("../assets/images/louvre.jpg")',
        'i_lenrek' : 'url("../assets/images/lenrek.png")',
        'i_library' : 'url("../assets/images/library.jpg")',
      },
    },
  },
  plugins: [],
}
export default config
