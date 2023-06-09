import letters from "../data/Cards";
import { useEffect } from "react";
import { Letter } from "../types/Letter";
import { useState } from "react";

type Props = {
  restart?: boolean;
};

const useShuffleCards = ({ restart }: Props) => {
  const [cancelled, setCancelled] = useState(false);

  // const [lettersGlobal, setLettersGlobal] = useState<Letter[]>([]);
  const localLetters: Letter[] = [];

  function handleRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleShuffleCards() {
    const min = 1;
    const max = 12;
    const generatedNumbers: number[] = [];

    while (localLetters.length < letters.length) {
      const landedNumber = handleRandomNumber(min, max);
      if (!generatedNumbers.includes(landedNumber)) {
        const findLetter = letters.find((letter) => letter.id === landedNumber);
        if (findLetter) {
          localLetters.push(findLetter);
          generatedNumbers.push(landedNumber);
        }
      }
    }

    // console.log(localLetters);

    return localLetters;
  }

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    handleShuffleCards,
  };
};

export default useShuffleCards;
