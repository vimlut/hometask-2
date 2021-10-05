/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, deleteNotes } from 'store/actions';
import { UIIconButton } from 'components';
import { NotesTableItem } from './NotesTableItem';

import './NotesTable.scss';

const NotesTable = () => {
  const [showActive, toggleShowActive] = useState(true);
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state);
  const activeNotes = notes.filter((note) => !note.isArchived);
  const archivedNotes = notes.filter((note) => note.isArchived);
  const data = showActive ? activeNotes : archivedNotes;
  function handleDeleteNote(e) {
    const noteId = e.target.closest('tr').id;
    if (confirm('Are you sure you want to delete this note?')) {
      dispatch(deleteNote(noteId));
    }
  }
  function handleDeleteAllNotes() {
    if (confirm('Are you sure you want to delete ALL notes?')) {
      dispatch(deleteNotes());
    }
  }

  function handleToggleActive() {
    toggleShowActive(!showActive);
  }

  return (
    <table className="data-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>
          <th />
          <th><UIIconButton icon="arch" onClick={handleToggleActive} /></th>
          <th><UIIconButton icon="del" onClick={handleDeleteAllNotes} /></th>
        </tr>
        {data.map((item) => (
          <NotesTableItem
            data={item}
            key={item.id}
            onDeleteNote={handleDeleteNote}
          />
        ))}
      </tbody>
    </table>
  );
};

export { NotesTable };
