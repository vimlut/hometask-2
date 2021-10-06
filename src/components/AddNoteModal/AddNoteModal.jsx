/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  UIModal, UIButton, UIInput, UISelect,
} from 'components';

const AddNoteModal = (props) => {
  const {
    isVisible, onClose, onSubmit, title,
  } = props;
  const initalState = { name: '', category: 'task', content: '' };
  const [formData, setFormData] = useState(initalState);
  const options = [{ value: 'task', label: 'Task' }, { value: 'Random Thought', label: 'Random Thought' }, { value: 'Idea', label: 'Idea' }, { value: 'Quote', label: 'Quote' }];
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

export { AddNoteModal };
