/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';

import { UIIconButton } from 'components';

import './NotesTableItem.scss';

const NotesTableItem = (props) => {
  const {
    data: {
      id, name, created, category, content, isArchived,
    }, onDeleteNote, onArchiveNote, onEditNote,
  } = props;
  const dates = content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g)?.join(', ') || '';
  const dateCreated = new Date(created).toLocaleDateString();
  const description = content.length > 19 ? `${content.substring(0, 19)} ...` : content;
  function handleDeleteNote() {
    onDeleteNote(id);
  }
  function handleArchiveNote() {
    onArchiveNote(id, isArchived);
  }
  function handleEditNote() {
    onEditNote(props.data);
  }

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{dateCreated}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{dates}</td>
      <td>
        <UIIconButton
          icon="edit"
          onClick={handleEditNote}
          label="Edit note"
          disabled={isArchived}
        />
      </td>
      <td>
        <UIIconButton
          icon="arch"
          onClick={handleArchiveNote}
          label={isArchived ? 'Unarchive note' : 'Archive note'}
        />
      </td>
      <td>
        <UIIconButton
          icon="del"
          onClick={handleDeleteNote}
          label="Delete note"
        />
      </td>
    </tr>
  );
};

NotesTableItem.defaultProps = {
  data: {
    id: '',
    name: '',
    created: '',
    category: '',
    content: '',
    isArchived: false,
  },
  onDeleteNote: null,
  onArchiveNote: null,
  onEditNote: null,
};

NotesTableItem.propTypes = {
  data: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      created: PropTypes.number,
      category: PropTypes.string,
      content: PropTypes.string,
      isArchived: PropTypes.bool,
    },
  ),
  onDeleteNote: PropTypes.func,
  onArchiveNote: PropTypes.func,
  onEditNote: PropTypes.func,
};

export { NotesTableItem };
