/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteNote, deleteNotes, updateNote, addNote,
} from 'store/actions';
import {
  UIIconButton, UIButton, NoteModal,
} from 'components';
import { NotesTableItem } from './NotesTableItem';

import './NotesTable.scss';

const NotesTable = () => {
  const dispatch = useDispatch();
  const [showActive, toggleShowActive] = useState(true);
  const [modalOptions, setModalOptions] = useState({
    isVisible: false, title: '', onClose: null, onConfirm: null, data: null,
  });
  const { notes } = useSelector((state) => state);
  const activeNotes = notes.filter((note) => !note.isArchived);
  const archivedNotes = notes.filter((note) => note.isArchived);
  const data = showActive ? activeNotes : archivedNotes;
  const tableCaption = showActive ? 'Active notes' : 'Archived notes';

  function handleDeleteNote(noteId) {
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
  function handleArchiveNote(id, isArchived) {
    dispatch(updateNote({ id, isArchived: !isArchived }));
  }
  function hideModal() {
    setModalOptions({
      ...modalOptions, isVisible: false,
    });
  }
  function handleAddNoteSubmit(formData) {
    const newNote = {
      id: uuidv4(),
      category: formData.category,
      content: formData.content,
      name: formData.name,
      isArchived: false,
      created: Date.now(),
    };
    dispatch(addNote(newNote));
    hideModal();
  }
  function handleEditNoteSubmit(note) {
    dispatch(updateNote(note));
    hideModal();
  }
  function showAddNoteModal() {
    setModalOptions({
      ...modalOptions, isVisible: true, title: 'Add new note', onConfirm: handleAddNoteSubmit, onClose: hideModal,
    });
  }
  function handleEditNote(note) {
    setModalOptions({
      ...modalOptions, isVisible: true, title: 'Edit note', onClose: hideModal, onConfirm: handleEditNoteSubmit, data: note,
    });
  }

  return (
    <section>
      <table className="data-table">
        <caption>
          <h2>{tableCaption}</h2>
        </caption>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th />
            <th>
              <UIIconButton
                icon="arch"
                onClick={handleToggleActive}
                label="Toggle active/archived notes"
              />
            </th>
            <th>
              <UIIconButton
                icon="del"
                onClick={handleDeleteAllNotes}
                label="Delete all notes"
                disabled={!data.length}
              />
            </th>
          </tr>
          {data.length ? (data.map((item) => (
            <NotesTableItem
              data={item}
              key={item.id}
              onDeleteNote={handleDeleteNote}
              onEditNote={handleEditNote}
              onArchiveNote={handleArchiveNote}
            />
          ))) : <tr><td colSpan="8">No notes to display</td></tr>}
        </tbody>
      </table>
      <UIButton onClick={showAddNoteModal} text="Add new note" />
      <NoteModal
        isVisible={modalOptions.isVisible}
        title={modalOptions.title}
        onClose={modalOptions.onClose}
        onSubmit={modalOptions.onConfirm}
        data={modalOptions.data}
      />
    </section>
  );
};

export { NotesTable };
