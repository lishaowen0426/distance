import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {},
    },
    extend: {
      borderRadius: {
        card: "1rem",
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        cnB: "var(--font-cn-B)",
        cnH: ["var(--font-cn-H)"],
        cnL: ["var(--font-cn-L)"],
        cnR: ["var(--font-cn-R)"],
        cnM: ["var(--font-cn-M)"],
      },
      colors: {
        "background-primary": "rgb(var(--background-primary)/ <alpha-value>)",
        "background-secondary":
          "rgb(var(--background-secondary)/ <alpha-value>)",
        "background-card": "rgb(var(--background-card)/ <alpha-value>)",
        "background-chosen": "rgb(var(--background-chosen)/ <alpha-value>)",
        "background-home-top": "rgb(var(--background-home-top)/ <alpha-value>)",
        "search-background": "rgb(var(--search-background)/ <alpha-value>)",
        "action-button": "rgb(var(--action-button)/ <alpha-value>)",
        "text-primary": "rgb(var(--text-primary)/<alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary)/80)",
        "text-link": "rgb(var(--text-link)/<alpha-value>)",
        "text-unselected": "rgb(var(--text-unselected)/<alpha-value>)",
        "text-highlight": "rgb(var(--text-highlight)/<alpha-value>)",
        "icon-default": "rgb(var(--icon-default)/<alpha-value>)",
        "icon-chosen": "rgb(var(--icon-chosen)/<alpha-value>)",
        "back-icon-stroke": "rgb(var(--back-icon-stroke)/<alpha-value>)",
        "back-icon-fill-primary": "rgb(var(--back-icon-fill-primary)/3)",
        "back-icon-fill-secondary": "rgb(var(--back-icon-fill-secondary))",
        "topic-skeleton": "rgb(var(--topic-skeleton)/ <alpha-value>)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      screens: {
        desktop: "1280px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
