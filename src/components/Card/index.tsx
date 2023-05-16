import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./styles";

const Card = ({
  number,
  onDelete,
}: {
  number: number;
  onDelete: () => void;
}) => {
  return (
    <Grid item sx={styles.container} xs={12} p={0}>
      <Box>
        <Typography variant="body1" fontSize={24}>
          {number}
        </Typography>
        <Button onClick={onDelete} variant="outlined" sx={styles.button}>
          X
        </Button>
      </Box>
    </Grid>
  );
};

export default Card;
