/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { UIIconButton } from 'components';

import './NotesTableItem.scss';

const NotesTableItem = (props) => {
  const {
    data: {
      id, name, created, category, content, isArchived,
    }, onDeleteNote, onArchiveNote,
  } = props;
  const dates = content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g)?.join(', ') || '';
  const dateCreated = new Date(created).toLocaleDateString();
  const description = content.length > 19 ? `${content.substring(0, 19)} ...` : content;

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{dateCreated}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{dates}</td>
      <td>{!isArchived && <UIIconButton icon="edit" />}</td>
      <td><UIIconButton icon="arch" onClick={onArchiveNote} /></td>
      <td><UIIconButton icon="del" onClick={onDeleteNote} /></td>
    </tr>
  );
};

export { NotesTableItem };
