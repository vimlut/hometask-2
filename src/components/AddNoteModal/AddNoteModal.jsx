/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { UIModal, UIButton } from 'components';

const AddNoteModal = (props) => {
  const {
    isVisible, onClose, onSubmit, title,
  } = props;
  const initalState = { name: '', category: 'task', content: '' };
  const [formData, setFormData] = useState(initalState);
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
          <input
            id="task-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="task-category">Category:</label>
          <select name="category" value={formData.category} onChange={handleFormChange}>
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
            <option value="Quote">Quote</option>
          </select>
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
