/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

import './UIButton.scss';

const UIButton = (props) => {
  const {
    onClick, extraClassName, type, btnType, size, text, disabled,
  } = props;
  const componentClassName = `ui-button ui-button--${btnType} ui-button--${size} ${extraClassName}`;

  return (
    <button type={type} className={componentClassName} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

UIButton.defaultProps = {
  extraClassName: '',
  onClick: null,
  type: 'button',
  btnType: 'primary',
  size: 'normal',
  text: 'My button',
  disabled: false,
};

UIButton.propTypes = {
  type: PropTypes.string,
  btnType: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  extraClassName: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export { UIButton };
