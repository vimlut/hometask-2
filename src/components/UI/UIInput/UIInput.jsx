import PropTypes from 'prop-types';

import './UIInput.scss';

const UIInput = (props) => {
  const {
    type, name, id, value, onChange, extraClassName, placeholder, required, disabled,
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
  disabled: PropTypes.bool,
};

export { UIInput };
