import { style } from "@vanilla-extract/css";

export const headerBlock = style({
  fontSize: "22px",
  width: "100%",
  height: "100px",
  display: "flex",
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
