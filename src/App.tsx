import { useState, useEffect } from "react";

import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

import { Grid, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  const [cards, setCards] = useState<{ id: number; number: number }[]>([]);

  useEffect(() => {
    const existingCards = JSON.parse(localStorage.getItem("cards") || "[]");

    if (existingCards) {
      setCards(existingCards);
    }
  }, []);

  const addCard = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (cards.some((card) => card.number === randomNumber)) {
      addCard();
    } else {
      const newCard = {
        id: Date.now(),
        number: randomNumber,
      };

      setCards([...cards, newCard]);
      localStorage.setItem("cards", JSON.stringify([...cards, newCard]));
    }
  };

  const sortCards = () => {
    const sortedCards = [...cards].sort((a, b) => a.number - b.number);

    setCards(sortedCards);
    localStorage.setItem("cards", JSON.stringify(sortedCards));
  };

  const deleteCard = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);

    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} md={9}>
          <main>
            <Header onAddCard={addCard} onSortCards={sortCards} />
            <CardContainer cards={cards} onDeleteCard={deleteCard} />
            <Footer />
          </main>
        </Grid>
        <Instructions />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
