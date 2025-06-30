type ApiHandler = {
  get: <T>(url: string, options?: RequestInit) => Promise<T>;
  responseHandler: <T>(response: Response) => Promise<T>;
};

export const apiHandler: ApiHandler = {
  get: <T>(url: string, options: RequestInit = {}) => {
    const opts = {
      method: "GET",
      headers: { Accept: "application/json", ...(options.headers || {}) },
      ...options,
    };
    return fetch(url, opts).then((response) =>
      apiHandler.responseHandler<T>(response)
    );
  },

  responseHandler: <T>(response: Response): Promise<T> => {
    const { ok, status, url } = response;

    if (!ok) {
      throw new Error(`HTTP Error! STATUS: ${status}, URL: ${url}`);
    } else {
      return response.json();
    }
  },
};
