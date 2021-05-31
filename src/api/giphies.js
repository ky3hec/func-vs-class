export default async function getGiphies(searchTerm) {
  const requestURL = ` https://api.giphy.com/v1/gifs/search?api_key=JnxTmEGKXjZeUKBzRjTQoMDg8OX8pS5U&rating=pg&q=${searchTerm}`;
  const response = await fetch(requestURL);
  if (response.ok) {
    //response.json = {data, pagination, meta}
    const images = await response.json();
    return images;
  } else {
    return Promise.reject(response.status);
  }
}
