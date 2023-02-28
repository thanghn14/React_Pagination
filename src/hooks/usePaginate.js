import { useState, useEffect } from "react";

function usePaginate(url, query) {
  const [data, setData] = useState({
    data: [],
    page: 0,
    nextPage: 0,
    prevPage: 0,
    limit: 0,
    total: 0,
  });

  useEffect(() => {
    fetch(`${url.toString()}?${query.toString()}`, {
      headers: { "app-id": "638ede9b337668e91e323667" },
    })
      .then((res) => res.json())
      .then(({ data, limit, total, page }) => {
        setData({
          data,
          limit,
          total,
          page,
          nextPage: page + 1,
          prevPage: page - 1,
        });
        console.log("object 2:", { data, page, limit, total });
      });
  }, [query.toString()]);

  return data;
}

export default usePaginate;
