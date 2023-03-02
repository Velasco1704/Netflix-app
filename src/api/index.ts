export const getMoviesAPI = async () =>
  await fetch(import.meta.env.VITE_URL_API, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_KEY_API,
      "X-RapidAPI-Host": import.meta.env.VITE_HOST_API,
    },
  }).then((response) => response.json());
