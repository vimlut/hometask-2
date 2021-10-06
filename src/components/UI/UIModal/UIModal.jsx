import { createPortal } from 'react-dom';
import { UIIconButton } from 'components';

import './UIModal.scss';

const UIModal = ({
  title, isVisible, onClose, children, extraClassName,
}) => {
  const componentClassName = extraClassName ? `ui-modal ${extraClassName}` : 'ui-modal';
  const modalRoot = document.getElementById('modal-root');

  return isVisible && createPortal(
    (
      <div className="ui-modal__backdrop">
        <div
          role="dialog"
          aria-labelledby="ui-modal-title"
          aria-modal="true"
          className={componentClassName}
        >
          <div className="ui-modal__header">
            <h4 id="ui-modal-title" className="ui-modal__title">{title}</h4>
            <UIIconButton
              extraClassName="ui-modal__btn-close"
              icon="cancel"
              onClick={onClose}
              label="Close modal"
            />
          </div>
          <div className="ui-modal__content">{children}</div>
        </div>
      </div>
    ),
    modalRoot,
  );
};

UIModal.defaultProps = {
  title: 'Modal title',
  isVisible: false,
};

export { UIModal };
