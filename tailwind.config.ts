import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        card: "1rem",
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
      },
      screens: {
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
