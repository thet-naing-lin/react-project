export const urlToParamObj = (url) => {
  const currentUrl = new URL(url); // from api
  const newSearchParams = new URLSearchParams(currentUrl.search);
  return Object.fromEntries(newSearchParams);
};
