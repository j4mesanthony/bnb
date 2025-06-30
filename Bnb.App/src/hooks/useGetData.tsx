import { useEffect, useState } from "react";
import { apiHandler } from "../utils/apiHandler";

type FetchResult<T> = {
  data: T | undefined;
};

export function useGetData<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiHandler.get<T>(url);
      setData(response);
    };

    fetchData();
  }, [url]);

  return { data };
}
