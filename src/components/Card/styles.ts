const styles = {
  container: {
    width: "100%",
    height: "200px",
    border: "2px solid rgba(25, 118, 210, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: "8px",
    padding: '0px !important'
  },
  button: {
    position: "absolute",
    top: "12px",
    right: "16px",
  },
} as const;

export default styles;
