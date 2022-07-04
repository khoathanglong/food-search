import { Button, Grid, CircularProgress, Alert } from "@mui/material";
import { useRestaurants } from "../hooks";
import { useMemo, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
export const RESTAURANTS_PER_PAGE = 9;
export const Restaurants = ({ searchText, currentCategory = "all" }) => {
  const { isLoading, restaurants, error } = useRestaurants();
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRestaurants = useMemo(
    () =>
      restaurants
        .filter(
          (restaurant) =>
            restaurant.categoryId === currentCategory ||
            currentCategory === "all"
        )
        .filter((restaurant) =>
          restaurant.restaurant.toLowerCase().includes(searchText.toLowerCase())
        ),
    [restaurants, searchText, currentCategory]
  );

  const calculatedRestaurants = useMemo(() => {
    return filteredRestaurants.slice(0, RESTAURANTS_PER_PAGE * currentPage);
  }, [filteredRestaurants, currentPage]);

  const showLoadMore = useMemo(
    () => calculatedRestaurants.length < filteredRestaurants.length,
    [filteredRestaurants, calculatedRestaurants]
  );
  if (isLoading) {
    return <CircularProgress size={30} color="warning" />;
  }
  if (error) {
    return (
      <Alert severity="error">
        Can not fetch the restaurants, to try again
      </Alert>
    );
  }
  return (
    <Grid container spacing={3}>
      {calculatedRestaurants.map((mappedRestaurent) => {
        const {
          imageUrl,
          rating,
          promotion,
          isNew,
          minCookTime,
          maxCookTime,
          restaurant,
          id,
        } = mappedRestaurent;
        return (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <RestaurantCard
              {...{
                imageUrl,
                rating,
                promotion,
                isNew,
                minCookTime,
                maxCookTime,
                restaurant,
              }}
            />
          </Grid>
        );
      })}
      {showLoadMore && (
        <Grid align="center" item xs={12}>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            variant="outlined"
            color="warning"
          >
            + Show More
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
