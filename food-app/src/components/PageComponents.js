export const PageComponents = ({ CurrentPage, OnpageChange, lastPage }) => {
  const arr = new Array(lastPage).fill(0);

  return (
    <div>
      {arr.map((item, page) => (
        <button onClick={() => OnpageChange(page + 1)}>{page + 1}</button>
      ))}
    </div>
  );
};
