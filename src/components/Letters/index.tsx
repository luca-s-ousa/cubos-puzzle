import "./styles.css";
import useShuffleCards from "../../hooks/useShuffleCards";
import LetterComponent from "../LetterComponent";

const Letters = () => {
  const { lettersGlobal } = useShuffleCards({});

  return (
    <div className="container__letters">
      {lettersGlobal &&
        lettersGlobal.map((letter) => {
          return (
            <LetterComponent
              key={letter.id}
              id={letter.id}
              backImg={letter.backImg}
              turn={letter.turn}
              notTurnedImg={letter.notTurnedImg}
            />
          );
        })}
    </div>
  );
};

export default Letters;
