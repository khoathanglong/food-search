import { useCategories, useRestaurants } from "../index";
import { renderHook, act } from "@testing-library/react";
import { fetchCategories, fetchRestaurants } from "../../services";

jest.mock("../../services", () => {
  return {
    fetchCategories: jest.fn(),
    fetchRestaurants: jest.fn(),
  };
});

describe("hooks", () => {
  describe("useCategories", () => {
    it("fetch data successfully", async () => {
      const categories = [{ name: "sushi", id: "sushi id" }];
      fetchCategories.mockImplementationOnce(() =>
        Promise.resolve({ data: categories })
      );
      const { result } = renderHook(() => useCategories());
      expect(result.current.isLoading).toEqual(true);
      await act(async () => {
        fetchCategories();
      });
      expect(result.current.categories).toEqual(categories);
      expect(result.current.isLoading).toEqual(false);
      expect(result.current.error).toEqual(false);
    });

    it("failed to fetch", async () => {
      fetchCategories.mockImplementationOnce(() => Promise.reject("error"));

      const { result } = renderHook(() => useCategories());
      expect(result.current.isLoading).toEqual(true);

      await act(async () => {
        fetchCategories();
      });
      expect(result.current).toEqual({
        isLoading: false,
        categories: [],
        error: true,
      });
    });
  });
  describe("useRestaurants", () => {
    it("fetch data successfully", async () => {
      const restaurants = [{ name: "Aka", id: "restaurant id" }];
      fetchRestaurants.mockImplementationOnce(() =>
        Promise.resolve({ data: restaurants })
      );
      const { result } = renderHook(() => useRestaurants());
      expect(result.current.isLoading).toEqual(true);
      await act(async () => {
        fetchRestaurants();
      });
      expect(result.current.restaurants).toEqual(restaurants);
      expect(result.current.isLoading).toEqual(false);
      expect(result.current.error).toEqual(false);
    });

    it("failed to fetch", async () => {
      fetchRestaurants.mockImplementationOnce(() => Promise.reject("error"));

      const { result } = renderHook(() => useRestaurants());
      expect(result.current.isLoading).toEqual(true);

      await act(async () => {
        fetchRestaurants();
      });
      expect(result.current).toEqual({
        isLoading: false,
        restaurants: [],
        error: true,
      });
    });
  });
});
