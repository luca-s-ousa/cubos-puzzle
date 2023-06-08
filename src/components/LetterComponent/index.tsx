import "./styles.css";
import { Letter } from "../../types/Letter";

const LetterComponent = ({ id, backImg, notTurnedImg, turn }: Letter) => {
  return (
    <img
      src={turn ? backImg : notTurnedImg}
      className="img__letter"
      alt="img letter"
    />
  );
};

export default LetterComponent;
