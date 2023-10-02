import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        background: 'hsl(var(--color-background), <alpha-value>)',
        foreground: 'hsl(var(--color-foreground), <alpha-value>)',
        primary: 'hsl(var(--color-primary), <alpha-value>)',
        secondary: 'hsl(var(--color-secondary), <alpha-value>)',
        accent: 'hsl(var(--color-accent), <alpha-value>)',
      },
    },
  },
  plugins: [],
}

