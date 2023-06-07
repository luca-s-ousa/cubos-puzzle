import letters from "../data/Cards";
import { useEffect } from "react";
import { Letter } from "../types/Letter";

type Props = {
  restart?: boolean;
};

const useShuffleCards = ({ restart }: Props) => {
  let localLetters: Letter[] = [];
  let generatedNumbers: number[] = [];
  let landedNumber: number = -2;

  function handleRandomNumber() {
    const min = 1;
    const max = 12;

    const numberGenerate = Math.floor(Math.random() * (max - min + 1)) + min;

    return numberGenerate;
  }

  useEffect(() => {
    while (localLetters.length !== letters.length) {
      landedNumber = handleRandomNumber();
      if (!generatedNumbers.includes(landedNumber)) {
        const findLetter = letters.find((letter) => letter.id === landedNumber);
        localLetters.push(findLetter!);
        generatedNumbers.push(landedNumber);
      }
    }

    console.log(localLetters);

    // letters.map((letter) => {
    //   if (
    //     !generatedNumbers.includes(landedNumber) &&
    //     landedNumber === letter.id
    //   ) {
    //     localLetters.push(letter);
    //     generatedNumbers.push(landedNumber);
    //   }
    // });
  }, [restart]);

  return {
    localLetters,
  };
};

export default useShuffleCards;
