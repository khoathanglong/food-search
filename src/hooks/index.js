import { useEffect, useState } from "react";
import { fetchCategories, fetchDishes } from "../services";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, categories, error };
};

export const useDishes = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchDishes()
      .then((res) => {
        setDishes(res.data);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, dishes, error };
};
