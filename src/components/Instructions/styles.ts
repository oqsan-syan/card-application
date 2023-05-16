import { theme } from "../../theme";

const styles = {
  container: {
    boxSizing: "border-box",
    position: "fixed",
    top: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderLeft: "2px solid rgba(25, 118, 210, 0.5)",
    height: "100%",
    padding: "20px",
    [theme.breakpoints.down('md')]: {
      display: "none",
    },
  },
} as const;

export default styles;
