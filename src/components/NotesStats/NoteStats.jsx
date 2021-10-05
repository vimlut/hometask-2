import { useSelector } from 'react-redux';
import { NotesStatsItem } from './NotesStatsItem';

const NotesStats = () => {
  const { notes } = useSelector((state) => state);

  const categories = ['Task', 'Random Thought', 'Idea', 'Quote'];

  function getNotesByCategory(category) {
    return notes.filter(
      (note) => note.category.toUpperCase() === category.toUpperCase(),
    );
  }
  function getActiveNotesByCategory(category) {
    return getNotesByCategory(category).filter((task) => !task.isArchived);
  }
  function getArchivedNotesByCategory(category) {
    return getNotesByCategory(category).filter((task) => task.isArchived);
  }
  function getActiveNotesCountByCategory(category) {
    return getActiveNotesByCategory(category).length;
  }
  function getArchivedNotesCountByCategory(category) {
    return getArchivedNotesByCategory(category).length;
  }
  const data = categories.map((category, index) => ({
    id: `stat-${index}`,
    name: category,
    activeCount: getActiveNotesCountByCategory(category),
    archivedCount: getArchivedNotesCountByCategory(category),
  }));

  return (
    <table className="data-table">
      <tbody>
        <tr>
          <th>Category</th>
          <th>Active</th>
          <th>Archived</th>
        </tr>
        {data.map((item) => (
          <NotesStatsItem
            data={item}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export { NotesStats };
