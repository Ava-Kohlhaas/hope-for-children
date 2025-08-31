export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1024px", // Keep at 1024px instead of 1280px
        "2xl": "1024px", // Keep at 1024px instead of 1536px
      },
    },
    extend: {
      // Create a custom container class
      maxWidth: {
        'container': '1024px',
      },
      colors: {
        // Your custom color palette
        cream: "#FFF1D3",
        amber: "#FFBC00",
        navy: "#004063",
        lightcream:"#FFF6E2",
        // Alternative naming convention
        primary: {
          50: "#FFF1D3", // cream (lightest)
          400: "#FFBC00", // amber (medium)
          900: "#004063", // navy (darkest)
        },
      },
    }
  },
};
