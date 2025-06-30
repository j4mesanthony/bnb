type ApiHandler = {
  errorHandler: (error: Error) => void;
  get: (url: string, options?: RequestInit) => Promise<Response>;
  responseHandler: (response: Response) => void;
};

export const apiHandler: ApiHandler = {
  get: (
    url: string,
    options = { method: "GET", headers: { Accept: "application/json" } }
  ) => {
    return fetch(url, options)
      .then(apiHandler.responseHandler)
      .catch(apiHandler.errorHandler);
  },

  responseHandler: (response: Response) => {
    const { ok, status } = response;

    if (!ok) {
      throw new Error(`HTTP Error! ${status}`);
    } else {
      return response;
    }
  },

  errorHandler: function (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  },
};
