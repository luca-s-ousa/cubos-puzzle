import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { Letter } from "../types/Letter";

const useGameFunctions = () => {
  const { lettersGlobal, setLettersGlobal }: any = useContext(AppContext);

  function turnCard(letter: Letter) {
    const letterClick = letter;
    const localLetters = lettersGlobal as Letter[];

    const indexLetterClick = localLetters.findIndex(
      (letter) => letter === letterClick
    );

    localLetters.splice(indexLetterClick, 1);
    localLetters.splice(indexLetterClick, 0, {
      ...letterClick,
      turn: !letterClick.turn,
    });

    setLettersGlobal([...localLetters]);
  }

  return {
    turnCard,
  };
};

export default useGameFunctions;
