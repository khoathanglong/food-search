import { render } from "@testing-library/react";
import { RestaurantCard } from "../RestaurantCard";

describe("RestaurantCard", () => {
  it("renders correctly when isNew=false", () => {
    const mockProps = {
      rating: 4.6886,
      promotion: "1+1",
      isNew: false,
      minCookTime: 100,
      maxCookTime: 120,
      restaurant: "Kog",
      imageUrl: "https://source.unsplash.com/random/400x400?Desserts",
    };
    const { container } = render(<RestaurantCard {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
  it("renders correctly when isNew=true", () => {
    const mockProps = {
      rating: 4.6886,
      promotion: "1+1",
      isNew: true,
      minCookTime: 100,
      maxCookTime: 120,
      restaurant: "Kog",
      imageUrl: "https://source.unsplash.com/random/400x400?Desserts",
    };
    const { container } = render(<RestaurantCard {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
});
