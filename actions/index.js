import { useEffect, useState} from 'react';
import axios from 'axios';

export const useGetData = (apiRoute) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    async function fetchData() {
      const result = await axios.get(apiRoute);

      if (result.status !== 200) {
        setError(result.data);
      } else {
        setData(result.data);
      }

      setLoading(false);
    }
    fetchData();
  }, []);

  return {data, error, loading}
}
