import { useEffect, useState } from "react";

type FetchResult<T> = {
  data: T | undefined;
};

export function useFetch<T>(
  url: string,
  options?: RequestInit
): FetchResult<T> {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, options ?? {});
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, [url, options]);

  return { data };
}
