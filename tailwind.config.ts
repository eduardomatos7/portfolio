import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)"]
      },
      scale: {
        '115': '1.15',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-in',
        'slideUp': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulseGlow 4s infinite ease-in-out',
        'bounce-gentle': 'bounceGentle 4s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%': { transform: 'translateY(0)', opacity: '1'},
          '50%': { transform: 'translateY(7px)', opacity: '0.7' },
          '100%': { transform: 'translateY(0)', opacity: '1'}
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
