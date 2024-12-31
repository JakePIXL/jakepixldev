import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        brutalism: "5px 5px 0px 0px rgba(0,0,0,.25)",
        "brutalism-btn": "3px 3px 0px 0px rgba(0,0,0,.25)",
      },
      fontFamily: {
        monospace: ["TX-02", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
