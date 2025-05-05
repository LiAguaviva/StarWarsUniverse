export const getIdFromUrl = (url) => {
  const url_splited = url.split('/');
  return url_splited[url_splited.length - 2];
}

