/* eslint-disable react/prop-types */
import './UIIconButton.scss';

const UIIconButton = (props) => {
  const {
    onClick, icon, label, disabled,
  } = props;
  const buttonClassName = `ui-ibtn ui-ibtn--${icon}`;

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={onClick}
      title={label}
      aria-label={label}
      disabled={disabled}
    />
  );
};

export { UIIconButton };
