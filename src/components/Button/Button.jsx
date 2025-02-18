import PropTypes from "prop-types";
import "./Button.scss";
import classNames from "classnames";

export const Button = ({ onClick, children, cn }) => {
  return (
    <button onClick={onClick} className={classNames("button", cn)}>
      {children}
    </button>
  );
};

// Визначаємо propTypes
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  cn: PropTypes.string,
};

// Значення за замовчуванням
// Button.defaultProps = {
//   onClick: () => {},
//   cn: "",
// };
