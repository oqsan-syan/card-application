import { Box, Typography } from "@mui/material";
import styles from "./styles";

const Footer = () => {
  return (
    <footer>
      <Box sx={styles.footer}>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Card Application
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
