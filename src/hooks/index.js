import { useEffect, useState } from "react";
import { fetchCategories, fetchRestaurants } from "../services";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, categories, error };
};

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchRestaurants()
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, restaurants, error };
};
