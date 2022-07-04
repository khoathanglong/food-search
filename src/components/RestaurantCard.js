import { PromotionIcon } from "./PromotionIcon";
import { Star } from "@mui/icons-material";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import { useMemo } from "react";

export const RestaurantCard = ({
  imageUrl,
  rating,
  promotion,
  isNew,
  minCookTime,
  maxCookTime,
  restaurant,
}) => {
  const calculatedRating = useMemo(
    () => Math.round((rating + Number.EPSILON) * 10) / 10,
    [rating]
  );
  return (
    <Card sx={{ position: "relative", borderRadius: 2 }} elevation={2}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={restaurant}
      />
      <PromotionIcon promotion={promotion} />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          {restaurant}
        </Typography>
        <Chip
          size="small"
          icon={<Star />}
          label={calculatedRating}
          sx={{ borderRadius: 2 }}
        />
        <Chip
          size="small"
          label={`${minCookTime}-${maxCookTime} min`}
          sx={{ mx: 1, borderRadius: 2 }}
        />
        {isNew && (
          <Chip
            size="small"
            label="New"
            sx={{ color: "success.light", borderRadius: 2, fontWeight: "bold" }}
          />
        )}
      </CardContent>
    </Card>
  );
};
