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
  UIIconButton, UIButton, AddNoteModal, EditNoteModal,
} from 'components';
import { NotesTableItem } from './NotesTableItem';

import './NotesTable.scss';

const NotesTable = () => {
  const [showActive, toggleShowActive] = useState(true);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state);
  const activeNotes = notes.filter((note) => !note.isArchived);
  const archivedNotes = notes.filter((note) => note.isArchived);
  const data = showActive ? activeNotes : archivedNotes;
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
  function showAddNoteModal() {
    setAddModalVisible(true);
  }
  function hideAddNoteModal() {
    setAddModalVisible(false);
  }
  function showEditNoteModal() {
    setEditModalVisible(true);
  }
  function hideEditNoteModal() {
    setEditModalVisible(false);
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
    hideAddNoteModal();
  }
  function handleEditNote(note) {
    setSelectedNote(note);
    showEditNoteModal();
  }
  function handleEditNoteSubmit(note) {
    dispatch(updateNote(note));
    hideEditNoteModal();
  }

  return (
    <section>
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
      <AddNoteModal
        isVisible={isAddModalVisible}
        title="Add new note"
        onClose={hideAddNoteModal}
        onSubmit={handleAddNoteSubmit}
      />
      <EditNoteModal
        isVisible={isEditModalVisible}
        title="Edit note"
        onClose={hideEditNoteModal}
        onSubmit={handleEditNoteSubmit}
        data={selectedNote}
      />
    </section>
  );
};

export { NotesTable };
