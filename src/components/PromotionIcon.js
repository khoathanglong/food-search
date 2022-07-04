import { CardGiftcard, Percent } from "@mui/icons-material";
import { Chip } from "@mui/material";

export const PromotionIcon = ({ promotion }) => {
  const sx = {
    position: "absolute",
    top: 0,
    width: 32,
    height: 16,
    borderRadius: 0,
    py: 0.3,
    px: 0.5,
    borderBottomRightRadius: 10,
    color: "white",
    fontSize: 10,
  };

  if (promotion === "gift") {
    return <CardGiftcard sx={{ ...sx, bgcolor: "primary.main" }} />;
  }
  if (promotion === "discount") {
    return <Percent sx={{ ...sx, bgcolor: "error.main" }} />;
  }
  if (promotion === "1+1") {
    return (
      <Chip
        size="small"
        sx={{
          ...sx,
          bgcolor: "secondary.main",
          width: 48,
          height: 24,
          padding: 0,
        }}
        label="1+1"
      />
    );
  }
  return null;
};
