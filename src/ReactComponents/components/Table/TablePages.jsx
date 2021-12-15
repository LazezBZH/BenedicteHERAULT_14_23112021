export default function Pages({ postPerPage, totalOfPosts, page }) {
  const numberOfPages = [];

  for (let i = 1; i <= Math.ceil(totalOfPosts / postPerPage); i++) {
    numberOfPages.push(i);
  }
  return (
    <div className="page">
      {numberOfPages.map((number) => (
        <div key={number}>
          <p className="number" onClick={() => page(number)}>
            {number}
          </p>
        </div>
      ))}
    </div>
  );
}
