import { useContext } from "react";
import useShuffleCards from "../../hooks/useShuffleCards";
import ButtonReset from "../ButtonReset";
import Logo from "../Logo";
import "./styles.css";
import { AppContext } from "../../context/AppContext";

const Aside = () => {
  const { handleShuffleCards } = useShuffleCards({});
  const { setLettersGlobal }: any = useContext(AppContext);

  function resetGame() {
    const shuffleCards = handleShuffleCards();

    setLettersGlobal([...shuffleCards]);
  }

  return (
    <div className="container__aside">
      <Logo />
      <ButtonReset onClick={resetGame} />
    </div>
  );
};

export default Aside;
