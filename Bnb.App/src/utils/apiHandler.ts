type ApiHandler = {
  get: <T>(url: string, options?: RequestInit) => Promise<T>;
  responseHandler: <T>(response: Response) => Promise<T>;
};

export const apiHandler: ApiHandler = {
  get: <T>(url: string, options = {}) => {
    const opts = {
      method: "GET",
      headers: { Accept: "application/json" },
      ...options,
    };
    return fetch(url, opts).then((response) =>
      apiHandler.responseHandler<T>(response)
    );
  },

  responseHandler: <T>(response: Response): Promise<T> => {
    const { ok, status } = response;

    if (!ok) {
      throw new Error(`HTTP Error! ${status}`);
    } else {
      return response.json();
    }
  },
};
