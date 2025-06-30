type ApiHandler = {
  get: <T>(url: string) => Promise<T>;
  post: <T>(url: string, dto: T) => Promise<T>;
  responseHandler: <T>(response: Response) => Promise<T>;
};

export const apiHandler: ApiHandler = {
  get: <T>(url: string) => {
    const opts = {
      method: "GET",
      headers: { Accept: "application/json" },
    };
    return fetch(url, opts).then((response) =>
      apiHandler.responseHandler<T>(response)
    );
  },

  post: <T>(url: string, dto: T) => {
    const opts = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
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
