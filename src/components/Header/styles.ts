const styles = {
  container: {
    boxSizing: "border-box",
    position: "sticky",
    top: 0,
    left: 0,
    padding: "20px 40px",
    zIndex: 999,
    borderBottom: "2px solid rgba(25, 118, 210, 0.5)",
    display: "flex",
    alignItems: "center",
    columnGap: " 24px",
    backgroundColor: "#fff",
    height: "120px",
    boxShadow: '0px 9px 12px -10px rgba(30,140,253,0.9)',
  },
  button: {
    padding: "15px 30px",
    fontSize: "medium",
  },
} as const;

export default styles;
