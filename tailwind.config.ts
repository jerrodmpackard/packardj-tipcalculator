import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)', // Right side text color and button hover color
        veryDarkCyan: 'hsl(183, 100%, 15%)', // right side div background color and button background color and button hover text color
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(186, 14%, 43%)', // text color for input field labels
        lightGrayishCyan: 'hsl(185, 41%, 84%)', // whole page background color and '/ person' text color on right side green div
        veryLightGrayishCyan: 'hsl(189, 41%, 97%)', // background color of input fields
        white: 'hsl(0, 0%, 100%)', // text color for dark backgrounds and white div color
        resetBackground: 'hsl(186, 40%, 30%)', // reset button background color (before clicked)
        buttonBackground: 'hsl(173, 53%, 79%)', // button background (when clicked)
      },
    },
  },
  plugins: [],
};
export default config;
