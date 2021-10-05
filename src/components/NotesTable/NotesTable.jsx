/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UIIconButton, NotesTableItem } from 'components';

import './NotesTable.scss';

const NotesTable = () => {
  const [showActive, toggleShowActive] = useState(true);
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state);
  const activeNotes = notes.filter((note) => !note.isArchived);
  const archivedNotes = notes.filter((note) => note.isArchived);
  const data = showActive ? activeNotes : archivedNotes;
  function handleShowArchivedClick() {
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
          <th><UIIconButton icon="arch" onClick={handleShowArchivedClick} /></th>
          <th><UIIconButton icon="del" /></th>
        </tr>
        {data.map((item) => <NotesTableItem data={item} key={item.id} />)}
      </tbody>
    </table>
  );
};

export { NotesTable };
