import Typography from 'typography';

const typography = new Typography ({
    baseFontSize: "16px",
    baseLineHeight: 1.5,
    headerFontFamily: ["Jura", "Noto Sans HK", "Noto Sans SC", "sans-serif"],
    bodyFontFamily: ["Jura", "Noto Sans HK", "Noto Sans SC"],
    headerWeight: 500,
    bodyWeight: 300,
    includeNormalize: true,
    googleFonts: [
        {
            name: "Jura",
            styles: ["100", "200", "300", "400", "500", "700", "900"],
        },
        {
            name: "Noto Sans HK",
            styles: ["200", "300", "400", "700", "900"],
        },
        {
            name: "Noto Sans SC",
            styles: ["200", "300", "400", "700", "900"],
        },
    ],
});

export default typography;