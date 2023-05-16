import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles";

const Instructions = () => {
  return (
    <Grid item sm={3} sx={styles.container}>
      <aside>
        <Typography variant="h4" mb={3}>
          Instructions
        </Typography>
        <Box mb={2}>
          <Typography variant="subtitle1" fontWeight={700}>
            Add Card:
          </Typography>
          <Typography variant="body1">
            it should add a new card with a randomly generated and unique
            number.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="subtitle1" fontWeight={700}>
            Sort Cards:
          </Typography>
          <Typography variant="body1" mb={2}>
            it should sort all of the cards by their numbers, from lowest to
            highest.
          </Typography>
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle1" fontWeight={700}>
            Delete Card:
          </Typography>
          <Typography variant="body1">
            All of the cards must have an X icon on the top of the right side.
            This icon’s function is to delete the card.
          </Typography>
        </Box>
      </aside>
    </Grid>
  );
};

export default Instructions;
