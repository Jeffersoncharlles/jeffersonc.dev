import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
        reactNative: "stack 7s ease infinite alternate",
        nodeJs: "node 5s ease  infinite alternate",
        vscode: "stack 7s ease  infinite alternate",
        reactJs: "reactjs 7s ease infinite alternate",
        typescript: "types 7s ease infinite alternate",
      },
      keyframes: {
        flip: {
          "to": {
            "transform": "rotate(360deg)"
          }
        },
        rotate: {
          "to": {
            "transform": "rotate(90deg)"
          }
        },
        stack: {
          '0%': {
            transform: 'translateY(-30px) rotate(0deg)',
          },
          '100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
        },
        types: {
          '0%': {
            transform: 'translateY(10px) scale(0.9)',
          },
          '50%': {
            transform: 'translateY(30px) translateX(-10px)',
          },
          '100%': {
            transform: 'translateY(30px) translateX(-30px) scale(1)',
          },
        },
        node: {
          '0%': {
            transform: 'translateY(-30px) scale(1)',
          },
          '100%': {
            transform: 'translateY(10px) scale(0.9)',
          },
        },
        reactjs: {
          '0%': {},
          '50%': {
            transform: 'translateY(-30px) scale(1)',
          },
          '100%': {
            transform: 'translateY(20px) scale(0.9)',
          },
        },
      },
    },
    plugins: [],
  }
}
export default config;
