/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types';

import './UIInput.scss';

const UIInput = (props) => {
  const {
    type, name, id, value, onChange, extraClassName, placeholder, required, autofocus, disabled,
  } = props;
  const componentClassName = extraClassName ? `ui-input ${extraClassName}` : 'ui-input';

  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      className={componentClassName}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoFocus={autofocus}
      disabled={disabled}
      size={value.length}
    />
  );
};

UIInput.defaultProps = {
  extraClassName: '',
  onChange: null,
  value: '',
  id: '',
  type: 'text',
  name: 'ui-input',
  placeholder: '',
  required: false,
  autofocus: false,
  disabled: false,
};

UIInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  extraClassName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { UIInput };
