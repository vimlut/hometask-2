/* eslint-disable react/prop-types */
import React from 'react';
import './UIIconButton.scss';

const UIIconButton = (props) => {
  const {
    onClick, icon, text,
  } = props;
  const buttonClassName = `ui-ibtn ui-ibtn--${icon}`;

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export { UIIconButton };
