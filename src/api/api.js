export const callApi = (url) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};
