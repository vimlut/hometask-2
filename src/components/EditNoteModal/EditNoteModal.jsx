/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { noteCategories } from 'constants.js';
import {
  UIModal, UIButton, UIInput, UISelect,
} from 'components';

const EditNoteModal = (props) => {
  const {
    isVisible, onClose, onSubmit, title, data,
  } = props;
  const [formData, setFormData] = useState();
  useEffect(() => setFormData(data), [isVisible]);
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
        <div className="form-group">
          <label htmlFor="task-name">Name:</label>
          <UIInput
            id="task-name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="task-category">Category:</label>
          <UISelect name="category" value={formData.category} onChange={handleFormChange} options={options} />
        </div>
        <div className="form-group">
          <label htmlFor="task-content">Content:</label>
          <textarea name="content" value={formData.content} onChange={handleFormChange} />
        </div>
        <div className="form-controls">
          <UIButton onClick={onClose} btnType="secondary" text="Cancel" />
          <UIButton type="submit" btnType="primary" text="Confirm" />
        </div>
      </form>
    </UIModal>
  ) : null;
};

export { EditNoteModal };
