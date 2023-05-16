import Card from "../Card";
import { Grid } from "@mui/material";
import styles from "./styles";

const CardContainer = ({
  cards,
  onDeleteCard,
}: {
  cards: { id: number; number: number }[];
  onDeleteCard: (id: number) => void;
}) => {
  return (
    <Grid container sx={styles.cardContainer} spacing={4}>
      {cards.map((card) => (
        <Card
          key={card.id}
          number={card.number}
          onDelete={() => onDeleteCard(card.id)}
        />
      ))}
    </Grid>
  );
};

export default CardContainer;
