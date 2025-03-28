import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  margin: 0,
  padding: 0,
  fontFamily: "Inter",
  backgroundColor: "#F0F4F8",
});

globalStyle("a", {
  textDecoration: "none",
  color: "black",
});

globalStyle("h1", {
  color: "#6B9DFF",
  fontSize: "3.5vw",
  "@media": {
    "screen and (max-width: 820px)": {
      fontSize: "7vw",
    },
  },
});

globalStyle("h3", {
  color: "6B9DFF",
  fontSize: "30px",
  "@media": {
    "screen and (max-width: 560px)": {
      fontSize: "20px",
    },
  },
});

globalStyle("p", {
  fontSize: "22px",
  color: "rgba(128, 128, 128, 0.8)",
});
