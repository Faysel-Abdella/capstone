const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const handleResponse = async (response) => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data?.message || "Request failed";
    throw new Error(message);
  }
  return data;
};

export const apiClient = {
  get: (path) => fetch(`${API_BASE_URL}${path}`).then(handleResponse),
  post: (path, body) =>
    fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    }).then(handleResponse),
  patch: (path, body) =>
    fetch(`${API_BASE_URL}${path}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    }).then(handleResponse),
};
