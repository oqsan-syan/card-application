import { Box, Button } from "@mui/material";
import styles from "./styles";

const Header = ({
  onAddCard,
  onSortCards,
}: {
  onAddCard: () => void;
  onSortCards: () => void;
}) => {
  return (
    <header>
      <Box sx={styles.container}>
        <Button onClick={onAddCard} variant="contained" sx={styles.button}>
          Add Card
        </Button>
        <Button onClick={onSortCards} variant="contained" sx={styles.button}>
          Sort Cards
        </Button>
      </Box>
    </header>
  );
};

export default Header;
