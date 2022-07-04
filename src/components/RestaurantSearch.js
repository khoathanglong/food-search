import { TextField, InputAdornment, Grid } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";

import { Categories } from "./Categories";
import { Restaurants } from "./Restaurants";

export const RestaurantSearch = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSelectCategory = (category) => {
    setCurrentCategory(category);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth={true}
          placeholder="Enter restaurant name..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            sx: { borderRadius: 3 },
          }}
          onChange={handleSearchTextChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Categories
          onChange={handleSelectCategory}
          currentCategory={currentCategory}
        />
      </Grid>

      <Grid item xs={12}>
        <Restaurants
          currentCategory={currentCategory}
          searchText={searchText}
        />
      </Grid>
    </Grid>
  );
};
