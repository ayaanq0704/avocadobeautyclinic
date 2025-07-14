// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb",             // border-border
        background: "#ffffff",         // bg-background
        foreground: "#111827",         // text-foreground
        muted: "#f3f4f6",              // bg-muted
        "muted-foreground": "#6b7280", // text-muted-foreground
        primary: "#3b82f6",            // bg-primary
        "primary-foreground": "#ffffff", // text-primary-foreground
      },
    },
  },
  plugins: [],
}
