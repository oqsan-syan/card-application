import { theme } from "../../theme";

const styles = {
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
    height: "calc(100vh - 200px)",
    maxHeight: "calc(100vh - 200px)",
    margin: 0,
    gridGap: "20px",
    padding: "40px",
    overflowY: "auto",
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: "1fr",
    },
  },
} as const;

export default styles;
