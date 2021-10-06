/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import './UIButton.scss';

const UIButton = (props) => {
  const {
    onClick, extraClassName, type = 'button', btnType = 'primary', size = 'normal', text = 'Button',
  } = props;
  const componentClassName = `ui-button ui-button--${btnType} ui-button--${size} ${extraClassName}`;

  return (
    <button type={type} className={componentClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export { UIButton };
