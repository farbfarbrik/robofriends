export const callApi = (url: string) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};
