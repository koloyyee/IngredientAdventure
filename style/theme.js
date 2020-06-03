const theme = {
    light: {
        body: "#EAE7DC", // Main Background Color
        text: "#D8C3A5", // Content Text Color
        navText:"#8E8D8A", // Nav Font Color
        lightRed: "#E98074", // Link or Hover Color
        mutedRed: "#E85A4F" // Titles Color
    },
    dark: {
        main: "#8E8D8A", // Main Background Color
        text: "#D8C3A5", // Content Text Color
        navText:"#EAE7DC", // Nav Font Color
        lightRed: "#EBD991", // Link or Hover Color
        mutedRed: "#EBCD54" // Titles Color
    },
    neumorphism: {
        borderRadius: "20px",
        boxShadow: "-8px 8px 16px #e3e3e3, 8px -8px 16px #ffffff",
    },
    // min-width for media query
    breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px"
    }
}

export default theme;