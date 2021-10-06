import PropTypes from 'prop-types';

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

NotesStatsItem.defaultProps = {
  data: {
    name: '',
    activeCount: 0,
    archivedCount: 0,
  },
};

NotesStatsItem.propTypes = {
  data: PropTypes.shape(
    {
      name: PropTypes.string,
      activeCount: PropTypes.number,
      archivedCount: PropTypes.number,
    },
  ),
};

export { NotesStatsItem };
