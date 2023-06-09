import "./styles.css";
import { Letter } from "../../types/Letter";

type Props = {
  letter: Letter;
  onClick: (letter: Letter) => void;
};

const LetterComponent = ({ letter, onClick }: Props) => {
  const { id, turn, backImg, notTurnedImg } = letter;

  return (
    <img
      src={turn ? backImg : notTurnedImg}
      className="img__letter"
      alt="img letter"
      onClick={() => onClick(letter)}
    />
  );
};

export default LetterComponent;
