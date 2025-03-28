import { style } from "@vanilla-extract/css";

export const mainContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  width: "100%",
  paddingLeft: "40px",
  paddingRight: "40px",
  paddingTop: "20px",
  paddingBottom: "20px",
  boxSizing: "border-box",
});

export const mainBanner = style({
  display: "flex",
  gap: "20px",
  width: "100%",
  height: "auto",
  justifyContent: "space-between",
  flexWrap: "nowrap",

  "@media": {
    "screen and (max-width: 820px)": {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
});
export const bannerSemiBlock = style({
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "40px",
  boxSizing: "border-box",
  borderRadius: "50px",
  backgroundColor: "white",
  width: "50%",
  height: "450px",

  "@media": {
    "screen and (max-width: 820px)": {
      width: "100%",
      height: "auto",
      padding: "20px",
    },
  },
});

export const titlesBanner = style({
  textAlign: "center",
  display: "flex",
  padding: "40px",
  boxSizing: "border-box",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  width: "100%",
  height: "auto",
  backgroundColor: "white",
  borderRadius: "50px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
});

export const titles = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",

  "@media": {
    "screen and (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "screen and (max-width: 820px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
});

export const lessImportantBanner = style({
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50px",
  width: "100%",
  height: "300px",
  backgroundColor: "white",
});
