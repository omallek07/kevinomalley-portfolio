import useSWR from 'swr';

const fetcher = (url) =>
  fetch(url).then(async res => {
    const result = await res.json();
    console.log(result);
    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
});
