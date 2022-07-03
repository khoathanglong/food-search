import axios from "axios";

const api = axios.create({
  baseURL: "https://run.mocky.io/v3/",
});

const fetchCategories = () => api.get("f25ced0a-9ff7-4996-bdc7-430f281c48db");

const fetchDishes = () => api.get("a24cfec5-f76c-410b-a5ac-9f63fab28abb");

export { fetchCategories, fetchDishes };
