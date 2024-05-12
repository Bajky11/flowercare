import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    // Příprava hlaviček pro základní autentizaci
    const username = 'admin';
    const password = 'admin';
    const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;

    // Definování options objektu uvnitř hooku
    const options = {
      method: 'GET', // Nebo jiná HTTP metoda podle potřeby
      headers: {
        'Authorization': basicAuth,
        // Další potřebné hlavičky
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch:", error);
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup funkce
    return () => {
      isMounted = false;
    };
  // Závislosti useEffect hooku
  }, [url]);

  return { loading, data, error };
};

export default useFetchData;
