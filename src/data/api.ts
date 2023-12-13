const apiUrl = 'https://wrapped.azurewebsites.net/api';

export async function fetchData(url: string) {
  try {
    const response = await fetch(`${apiUrl}/${url}`, { mode: "cors" });
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
    return null;
  }
}
