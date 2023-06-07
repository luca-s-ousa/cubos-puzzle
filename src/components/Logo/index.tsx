import "./styles.css";
import LogoImg from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="container__logo">
      <img src={LogoImg} alt="Logo Cubos Puzzle" />
      <span>cubos puzzle</span>
    </div>
  );
};

export default Logo;
