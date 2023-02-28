import { Link, useSearchParams } from "react-router-dom";
import usePaginate from "./hooks/usePaginate";

function Home() {
  const [searchParams] = useSearchParams();
  const { data, page, limit, nextPage, prevPage } = usePaginate(
    "https://dummyapi.io/data/v1/post",
    searchParams
  );

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Author</td>
            <td>Likes</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const owner = item.owner;
            const no = page * limit + index + 1;
            return (
              <tr key={item.id}>
                <td>{no}</td>
                <td>{`${owner.firstName} ${owner.lastName}`}</td>
                <td>
                  👍<span className="like">{item.likes}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ display: "flex", gap: ".5rem" }}>
        <Link to={`?page=${prevPage}&limit=${limit}`}>Prev page</Link>
        <Link to={`?page=${nextPage}&limit=${limit}`}>Next page</Link>
      </div>
    </div>
  );
}

export default Home;
