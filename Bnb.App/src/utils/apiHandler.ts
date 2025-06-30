type ApiHandler = {
  get: <T>(url: string, requiresAuth?: boolean) => Promise<T>;
  post: <T>(url: string, dto: T, requiresAuth?: boolean) => Promise<T>;
  responseHandler: <T>(response: Response) => Promise<T>;
};

export const apiHandler: ApiHandler = {
  get: <T>(url: string, requiresAuth = true) => {
    const headers: Record<string, string> = { Accept: "application/json" };

    if (requiresAuth) {
      const token = "PLACEHOLDER";
      headers.Authorization = `Bearer ${token}`;
    }

    const opts = {
      headers,
      method: "GET",
    };

    return fetch(url, opts).then((response) =>
      apiHandler.responseHandler<T>(response)
    );
  },

  post: <T>(url: string, dto: T, requiresAuth = true) => {
    const headers: Record<string, string> = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (requiresAuth) {
      const token = "PLACEHOLDER";
      headers.Authorization = `Bearer ${token}`;
    }

    const opts = {
      headers,
      method: "POST",
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
