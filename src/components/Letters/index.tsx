import "./styles.css";
import useShuffleCards from "../../hooks/useShuffleCards";
import LetterComponent from "../LetterComponent";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Letter } from "../../types/Letter";
import useGameFunctions from "../../hooks/useGameFunctions";

const Letters = () => {
  const { handleShuffleCards } = useShuffleCards({});
  const { turnCard } = useGameFunctions();

  const { lettersGlobal, setLettersGlobal }: any = useContext(AppContext);

  useEffect(() => {
    if (!lettersGlobal) {
      const shuffledCards = handleShuffleCards();

      setLettersGlobal(shuffledCards);
    }
  }, [handleShuffleCards, lettersGlobal, setLettersGlobal]);

  return (
    <div className="container__letters">
      {lettersGlobal &&
        lettersGlobal.map((letter: Letter) => {
          return (
            <LetterComponent
              key={letter.id}
              letter={letter}
              onClick={() => turnCard(letter)}
            />
          );
        })}
    </div>
  );
};

export default Letters;
