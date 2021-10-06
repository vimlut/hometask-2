/* eslint-disable react/prop-types */
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

export { UIIconButton };
