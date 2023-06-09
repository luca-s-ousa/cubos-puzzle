import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { Letter } from "../types/Letter";

const useGameFunctions = () => {
  const { lettersGlobal, setLettersGlobal }: any = useContext(AppContext);
  const [lettersTurned, setLettersTurned] = useState<Letter[]>([]);

  function turnCard(letter: Letter) {
    if (lettersTurned.length === 2) {
      return;
    }

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

    if (!letterClick.turn === true && !lettersTurned.includes(letterClick)) {
      setLettersTurned([
        ...lettersTurned,
        { ...letterClick, turn: !letterClick.turn },
      ]);
    }
  }

  function delay() {
    return new Promise<void>((resolve, _) => {
      setTimeout(() => {
        resolve();
      }, 1100);
    });
  }

  useEffect(() => {
    function handleDifferentLetters() {
      return new Promise<void>((resolve, _) => {
        setTimeout(() => {
          let localLetters = lettersGlobal as Letter[];
          setLettersTurned([]);

          setLettersGlobal([
            ...localLetters.map((letter) => {
              return { ...letter, turn: false };
            }),
          ]);

          resolve();
        }, 1000);
      });
    }

    function handleEqualsLetters() {
      let localLetters = lettersGlobal as Letter[];

      setLettersGlobal([
        ...localLetters.filter((letter) => letter.turn !== true),
      ]);

      setLettersTurned([]);
    }

    if (lettersTurned.length === 2) {
      if (lettersTurned[0].id === lettersTurned[1].id) {
        setLettersTurned([]);
        return;
      }

      if (lettersTurned[0].backImg !== lettersTurned[1].backImg) {
        handleDifferentLetters().then();
        return;
      }

      delay().then(() => {
        handleEqualsLetters();
        return;
      });
    }
  }, [lettersTurned, setLettersGlobal, lettersGlobal]);

  return {
    turnCard,
  };
};

export default useGameFunctions;
