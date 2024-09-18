import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "16/9": "16 / 9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-gradient": "linear-gradient(90deg, #CF71ED 0%, #3335E2 100%)",
        "white-border-gradient": "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)",
        "Text-Black-gradient": "linear-gradient(90deg, #272727 100%, #191919 100%)",
        "sub-section-gradient":
          "linear-gradient(180deg, #EFD7EB 0%, #B8D5FB 100%)",
      },
      colors: {
        "background-color": "#FFFFFFCC",
        "drop-Down-text-color": "#83848B",
        "head-notice-text-color": "#767676",
        "top-services-bg": "#F2F2F7",
        "custom-gradient-start": "#CF71ED",
        "custom-gradient-end": "#3335E2",
      },
      screens: {
        'custom-lg': '1055px', // Custom breakpoint to trigger mobile layout at 1055px
      },
      animation: {
        "infinite-scroll": "infinite-scroll_forward 1000s linear infinite",
        "infinite-scroll_2": "infinite-scroll_backward 1000s linear infinite",
        aurora: "aurora 60s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
          to: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
        },
        "infinite-scroll_forward": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "infinite-scroll_backward": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        scroll: {
          to: {
            transform: "translateY(calc(-100% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
