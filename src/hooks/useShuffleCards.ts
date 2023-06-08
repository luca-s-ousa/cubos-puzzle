import letters from "../data/Cards";
import { useEffect } from "react";
import { Letter } from "../types/Letter";
import { useState } from "react";

type Props = {
  restart?: boolean;
};

const useShuffleCards = ({ restart }: Props) => {
  const [lettersGlobal, setLettersGlobal] = useState<Letter[]>([]);

  function handleRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const min = 1;
    const max = 12;
    const localLetters: Letter[] = [];
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

    console.log(localLetters);
    setLettersGlobal(localLetters);
  }, [restart]);

  return {
    lettersGlobal,
  };
};

export default useShuffleCards;
