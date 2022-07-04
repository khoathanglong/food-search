import { RestaurantSearch } from "../RestaurantSearch";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../Categories", () => ({
  Categories: (props) => {
    const MockName = "mock-category";
    return <MockName role="mockcategory" {...props} />;
  },
}));
jest.mock("../Restaurants", () => ({
  Restaurants: (props) => {
    const MockName = "mock-restaurants";
    return <MockName role="mockrestaurants" {...props} />;
  },
}));
describe("RestaurantSearch", () => {
  it("renders correctly", () => {
    const { container } = render(<RestaurantSearch />);
    expect(container).toMatchSnapshot();
  });

  it("updates searchText correctly", () => {
    const { container } = render(<RestaurantSearch />);

    fireEvent.change(container.querySelector("input"), {
      target: { value: "hello world" },
    });
    expect(screen.getByDisplayValue("hello world")).toBeTruthy();
  });
});
