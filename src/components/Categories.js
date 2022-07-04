import { useCategories } from "../hooks";
import { ButtonGroup, Button, CircularProgress } from "@mui/material";

export const Categories = ({ onChange, currentCategory }) => {
  const { isLoading, categories, error } = useCategories();
  if (isLoading) {
    return <CircularProgress size={30} color="warning" />;
  }
  return (
    <ButtonGroup color="warning">
      {/* if error when loading categories, still display All button  */}
      <Button
        onClick={() => {
          onChange("all");
        }}
        sx={{ borderRadius: 3 }}
        disableElevation
        variant={currentCategory === "all" ? "contained" : "outlined"}
      >
        All
      </Button>
      {!error &&
        categories.map((cat) => {
          const { id, name } = cat;
          return (
            <Button
              sx={{ borderRadius: 3 }}
              variant={currentCategory === id ? "contained" : "outlined"}
              key={id}
              disableElevation
              onClick={() => onChange(id)}
            >
              {name}
            </Button>
          );
        })}
    </ButtonGroup>
  );
};
