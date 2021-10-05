/* eslint-disable react/prop-types */
const NotesStatsItem = ({ data }) => {
  const {
    name, activeCount, archivedCount,
  } = data;

  return (
    <tr>
      <td>{name}</td>
      <td>{activeCount}</td>
      <td>{archivedCount}</td>
    </tr>
  );
};

export { NotesStatsItem };
