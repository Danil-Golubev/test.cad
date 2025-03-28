import { style } from "@vanilla-extract/css";

export const headerBlock = style({
  fontSize: "22px",
  width: "100%",
  height: "100px",
  display: "flex",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)",
  boxSizing: "border-box",
  alignItems: "center",
  backgroundColor: "white",
  borderBottomLeftRadius: "50px",
  borderBottomRightRadius: "50px",
});

export const headerContent = style({
  padding: "50px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
