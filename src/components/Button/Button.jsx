import "./Button.scss";

export const Button = ({ onClick, children, cn }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`button ${cn}`}
    >
      {children}
    </button>
  );
};
