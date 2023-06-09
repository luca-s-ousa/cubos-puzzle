import "./styles.css";

type Props = {
  onClick: () => void;
};

const ButtonReset = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="btn__reset">
      reset
    </button>
  );
};

export default ButtonReset;
