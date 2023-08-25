const SortPanel = ({ requests, setSortedRequests }) => {
  const sortRequestsByDateAsc = () => {
    setSortedRequests(
      [...requests].sort((a, b) => new Date(a.date) - new Date(b.date))
    );
  };

  const sortRequestsByDateDesc = () => {
    setSortedRequests(
      [...requests].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  return (
    <div className="sortPanel">
      <h6>filterPanel</h6>
      <button onClick={sortRequestsByDateAsc}>Sort by Date Asc</button>
      <button onClick={sortRequestsByDateDesc}>Sort by Date Desc</button>
    </div>
  );
};
export default SortPanel;
