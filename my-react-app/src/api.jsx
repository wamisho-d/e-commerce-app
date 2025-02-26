const API_BASE_URL = "https://api.example.com";

export async function fetchData(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
