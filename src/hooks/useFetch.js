import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancel = false;
    axios
      .get(url)
      .then((res) => !cancel && setData(res.data))
      .catch((err) => !cancel && setError(err))
      .finally(() => !cancel && setLoading(false));
    return () => {
      cancel = true;
    };
  }, [url]);

  return { data, loading, error };
}
