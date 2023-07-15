import { useEffect, useState } from "react";

const loadData = () => Promise.resolve("data");

function DataComponent() {
  const [data, setData] = useState<string>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);
    loadData()
      .then(data => {
        setData(data);
      })
      .catch(e => setError(e));
  }, []);
  if (isLoading) return <div>Loading</div>;
  if (isLoading) return <div>{error}</div>;
  return <div>{data}</div>;
}
