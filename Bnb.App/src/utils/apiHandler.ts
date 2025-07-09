type ApiHandler = {
  get: <T>(url: string, requiresAuth?: boolean) => Promise<T>;
  post: <T>(url: string, dto: T, requiresAuth?: boolean) => Promise<T>;
};

export const apiHandler: ApiHandler = {
  get: <T>(url: string, requiresAuth = true): Promise<T> => {
    const opts = { method: "GET" };
    return doApiCall<T>(url, opts, requiresAuth);
  },

  post: <T>(url: string, dto: T, requiresAuth = true): Promise<T> => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const opts = {
      headers,
      method: "POST",
      body: JSON.stringify(dto),
    };

    return doApiCall<T>(url, opts, requiresAuth);
  },
};

const doApiCall = <T>(
  url: string,
  options: RequestInit,
  requiresAuth = true
): Promise<T> => {
  const headers: HeadersInit = {
    Accept: "application/json",
  };

  if (requiresAuth) {
    const token = "PLACEHOLDER";
    headers.Authorization = `Bearer ${token}`;
  }

  const opts = {
    ...options,
    headers: { ...headers, ...options.headers },
  };

  return fetch(url, opts).then((response) => responseHandler<T>(response));
};

const responseHandler = <T>(response: Response): Promise<T> => {
  const { ok, status, url } = response;

  if (!ok) {
    throw new Error(`HTTP Error! STATUS: ${status}, URL: ${url}`);
  } else {
    return response.json();
  }
};
