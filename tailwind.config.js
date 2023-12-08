/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,liquid}", "!./**/node_modules/**"],
  theme: {
    extend:
    {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
        zerodha: ["Inter","serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      backgroundImage: {
        feature: "url('/Resources/7 Razorpay/feature-section-2BG.svg')",
        new: "url('/Resources/7 Razorpay/instant-settlement-bg.svg')",
        hover: "url('/Resources/7 Razorpay/instant-settlement-bg.svg')",
        core: "url('/Resources/7 Razorpay/core-features-sectionBg.svg')"
      },
    },
  },
  plugins: [],
}

