import PropTypes from 'prop-types';

import './UIIconButton.scss';

const UIIconButton = (props) => {
  const {
    onClick, icon, label, disabled, extraClassName,
  } = props;
  const componentClassName = `ui-icon-button ui-icon-button--${icon} ${extraClassName}`;

  return (
    <button
      type="button"
      className={componentClassName}
      onClick={onClick}
      title={label}
      aria-label={label}
      disabled={disabled}
    />
  );
};

UIIconButton.defaultProps = {
  extraClassName: '',
  onClick: null,
  icon: '',
  label: 'My button',
  disabled: false,
};

UIIconButton.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  extraClassName: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export { UIIconButton };
