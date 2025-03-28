import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "relative",
  width: "100%",
  maxWidth: "560px",
  aspectRatio: "16 / 9",
  cursor: "pointer",
  borderRadius: "10px",
  overflow: "hidden",
  border: "4px solid #6B9DFF",
});

export const thumbnail = style({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const playButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "rgba(107, 156, 255, 0.49)",
  color: "white",
  height: "20%",
  border: "none",
  width: "20%",
  padding: "15px 25px",
  fontSize: "24px",
  borderRadius: "25px",
  cursor: "pointer",
});

export const iframe = style({
  width: "100%",
  height: "100%",
  border: "none",
  position: "absolute",
  top: 0,
  left: 0,
});
