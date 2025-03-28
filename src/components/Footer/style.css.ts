import { style } from "@vanilla-extract/css";

export const footerBlock = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "200px",
  backgroundColor: "white",
  borderTopLeftRadius: "50px",
  borderTopRightRadius: "50px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)",
});
