/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { UIIconButton } from 'components';
import './NotesTableItem.scss';

const NotesTableItem = ({ data }) => {
  const {
    id, name, created, category, content,
  } = data;
  const getDates = (str) => str.match(/\d{1,2}\/\d{1,2}\/\d{4}/g)?.join(', ') || '';
  const getDate = (dateInMs) => new Date(dateInMs).toLocaleDateString();
  const getContent = (str) => (str.length > 19 ? `${str.substring(0, 19)} ...` : str);

  return (
    <tr>
      <td>{name}</td>
      <td>{getDate(created)}</td>
      <td>{category}</td>
      <td>{getContent(content)}</td>
      <td>{getDates(content)}</td>
      <td><UIIconButton icon="edit" /></td>
      <td><UIIconButton icon="arch" /></td>
      <td><UIIconButton icon="del" /></td>
    </tr>
  );
};

export { NotesTableItem };
