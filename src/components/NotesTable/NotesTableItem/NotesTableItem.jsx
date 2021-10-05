/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { UIIconButton } from 'components';

import './NotesTableItem.scss';

const NotesTableItem = (props) => {
  const {
    data: {
      id, name, created, category, content,
    }, onDeleteNote,
  } = props;
  function getDates(str) {
    return str.match(/\d{1,2}\/\d{1,2}\/\d{4}/g)?.join(', ') || '';
  }
  function getDate(dateInMs) {
    return new Date(dateInMs).toLocaleDateString();
  }
  function getContent(str) {
    return str.length > 19 ? `${str.substring(0, 19)} ...` : str;
  }

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{getDate(created)}</td>
      <td>{category}</td>
      <td>{getContent(content)}</td>
      <td>{getDates(content)}</td>
      <td><UIIconButton icon="edit" /></td>
      <td><UIIconButton icon="arch" /></td>
      <td><UIIconButton icon="del" onClick={onDeleteNote} /></td>
    </tr>
  );
};

export { NotesTableItem };
