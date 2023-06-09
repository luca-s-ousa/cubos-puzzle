import Aside from "../../components/Aside";
import Letters from "../../components/Letters";
import "./styles.css";

import { AppContextProvider } from "../../context/AppContext";
import { useState } from "react";
import { Letter } from "../../types/Letter";

function Home() {
  const [lettersGlobal, setLettersGlobal] = useState<Letter[]>();

  return (
    <AppContextProvider value={{ lettersGlobal, setLettersGlobal }}>
      <div className="container__app">
        <Aside />
        <div className="content__main">
          <Letters />
        </div>
      </div>
    </AppContextProvider>
  );
}

export default Home;
