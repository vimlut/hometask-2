/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UIIconButton, NotesTableItem } from 'components';

import './NotesTable.scss';

const NotesTable = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state);
  const dates = (content) => content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g)?.join(', ') || '';
  const getDate = (created) => new Date(created).toLocaleDateString();
  const contentMaxLength = 19;
  const taskContent = (content) => (content.length > contentMaxLength ? `${content.substring(0, 19)} ...` : content);

  return (
    <table className="data-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>
          <th>xx</th>
          <th><UIIconButton icon="arch" /></th>
          <th><UIIconButton icon="del" /></th>
        </tr>
        {notes && notes.map((item) => <NotesTableItem data={item} key={item.id} />)}
      </tbody>
    </table>
  );
};

export { NotesTable };
