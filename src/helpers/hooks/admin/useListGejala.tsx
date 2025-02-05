import prisma from '@/lib/prisma';
import { useState, useEffect } from 'react';
import axios from 'axios';

type errorType = {
  message?: string | null;
  // status?: number | null;
} | null;

const useListGejala = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<errorType>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<number | null>(null);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const data = await axios.get('')
        setData(data as any);
        setStatus(200);
      } catch (error) {
        setError({ message: (error as Error).message });
        setStatus(500);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading, status };
};


export default useListGejala;