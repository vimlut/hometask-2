import PropTypes from 'prop-types';

import './UITextArea.scss';

const UITextArea = (props) => {
  const {
    name, id, value, onChange, extraClassName, placeholder, required, disabled,
  } = props;
  const componentClassName = extraClassName ? `ui-textarea ${extraClassName}` : 'ui-textarea';

  return (
    <textarea
      name={name}
      id={id}
      value={value}
      className={componentClassName}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

UITextArea.defaultProps = {
  extraClassName: '',
  onChange: null,
  value: '',
  id: '',
  name: 'ui-textarea',
  placeholder: '',
  required: false,
  disabled: false,
};

UITextArea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  extraClassName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { UITextArea };
