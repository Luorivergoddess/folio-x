import localFont from 'next/font/local'

// fonts configurations
export const fontConfig = {
  primary: {
    name: "Maple Mono",
    src: "/fonts/MapleMonoRegular.ttf",
    variable: "font-primary",
    display: "swap" as const
  },
  fallback: "system-ui, -apple-system, sans-serif"
} as const

// fonts loader
export const primary = localFont({
  src: '../../../public/fonts/MapleMonoRegular.ttf',
  variable: '--font-primary',
  display: 'swap'
})
