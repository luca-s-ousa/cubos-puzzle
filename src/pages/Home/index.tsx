import Aside from "../../components/Aside";
import Letters from "../../components/Letters";
import "./styles.css";

function Home() {
  return (
    <div className="container__app">
      <Aside />
      <div className="content__main">
        <Letters />
      </div>
    </div>
  );
}

export default Home;
