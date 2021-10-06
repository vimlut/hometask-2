/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { noteCategories } from 'constants.js';
import {
  UIModal, UIButton, UIInput, UISelect, UIFormGroup, UITextArea,
} from 'components';

const NoteModal = (props) => {
  const {
    isVisible, onClose, onSubmit, title, data,
  } = props;
  const initalsState = data || { name: '', category: 'task', content: '' };
  const [formData, setFormData] = useState();
  useEffect(() => setFormData(initalsState), [isVisible]);
  const options = noteCategories.map((cat) => ({ value: cat, label: cat }));
  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return isVisible ? (
    <UIModal
      isVisible={isVisible}
      onClose={onClose}
      title={title}
    >
      <form onSubmit={handleFormSubmit}>
        <UIFormGroup>
          <label htmlFor="task-name">Name:</label>
          <UIInput
            id="task-name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </UIFormGroup>
        <UIFormGroup>
          <label htmlFor="task-category">Category:</label>
          <UISelect name="category" value={formData.category} onChange={handleFormChange} options={options} />
        </UIFormGroup>
        <UIFormGroup>
          <label htmlFor="task-content">Content:</label>
          <UITextArea name="content" value={formData.content} onChange={handleFormChange} />
        </UIFormGroup>
        <div className="ui-modal__controls">
          <UIButton onClick={onClose} btnType="secondary" text="Cancel" />
          <UIButton type="submit" text="Confirm" />
        </div>
      </form>
    </UIModal>
  ) : null;
};

export { NoteModal };
