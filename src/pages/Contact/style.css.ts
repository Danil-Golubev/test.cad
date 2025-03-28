import { style } from "@vanilla-extract/css";

export const container = style({
  boxSizing: "border-box",
  padding: "20px",
  display: "flex",
  width: "100%",
  height: "80vh",
  justifyContent: "center",
  alignItems: "center",
});

export const content = style({
  textAlign: "center",
  backgroundColor: "white",
  width: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  boxSizing: "border-box",
  borderRadius: "50px",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
  gap: "15px",
});

export const inputClass = style({
  padding: "15px",
  borderRadius: "15px",
  border: "1px solid #ccc",
  width: "100%",
  transition: "border-color 0.3s",
  ":focus": {
    borderColor: "#1890ff",
    outline: "none",
  },
  ":hover": {
    borderColor: "#888",
  },
});

export const textareaClass = style({
  padding: "15px",
  borderRadius: "15px",
  border: "1px solid #ccc",
  width: "100%",
  minHeight: "150px",
  transition: "border-color 0.3s",
  ":focus": {
    borderColor: "#1890ff",
    outline: "none",
  },
  ":hover": {
    borderColor: "#888",
  },
});

export const error = style({
  color: "red",
  fontSize: "12px",
});
export const contactTitle = style({
  fontSize: "30px",
});

export const buttomSubmit = style({
  backgroundColor: "#6B9DFF",
  height: "40px",
  borderRadius: "25px",
});
export const responsePage = style({
  textAlign: "center",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});
