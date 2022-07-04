import { Restaurants, RESTAURANTS_PER_PAGE } from "../Restaurants";
import { render, fireEvent, screen } from "@testing-library/react";
import { useRestaurants } from "../../hooks";

jest.mock("../RestaurantCard", () => ({
  RestaurantCard: () => {
    const MockName = "mock-restaurant-card";
    return <MockName role="mockRestaurant" />;
  },
}));

jest.mock("../../hooks", () => {
  const originalModule = jest.requireActual("../../hooks");
  return {
    __esModule: true,
    ...originalModule,
    useRestaurants: jest.fn(),
  };
});
const mockRestaurants = [
  {
    id: "628b5decc94a27754f30e6f1",
    index: 0,
    rating: 3.9508,
    promotion: "gift",
    isNew: false,
    categoryId: "category 1",
    minCookTime: 80,
    maxCookTime: 100,
    restaurant: "Niquent",
    name: "Niquent Drinks",
    imageUrl: "https://source.unsplash.com/random/400x400?Drinks",
  },
  {
    id: "628b5decf39bcc4e982fc88a",
    index: 1,
    rating: 4.9874,
    promotion: "1+1",
    isNew: false,
    categoryId: "6288a89f1f0152b8c2cd512b",
    minCookTime: 120,
    maxCookTime: 140,
    restaurant: "Boilicon",
    name: "Boilicon Sushi",
    imageUrl: "https://source.unsplash.com/random/400x400?Sushi",
  },
  {
    id: "628b5dec6678e96d75f2f7de",
    index: 2,
    rating: 3.4518,
    promotion: null,
    isNew: true,
    categoryId: "category 1",
    minCookTime: 100,
    maxCookTime: 120,
    restaurant: "Quinex",
    name: "Quinex Sushi",
    imageUrl: "https://source.unsplash.com/random/400x400?Sushi",
  },
  {
    id: "628b5dec97eacf5e8a604bd7",
    index: 3,
    rating: 1.5975,
    promotion: "gift",
    isNew: false,
    categoryId: "6288a89f7338764f2071a8a8",
    minCookTime: 120,
    maxCookTime: 140,
    restaurant: "Perkle",
    name: "Perkle Pizza",
    imageUrl: "https://source.unsplash.com/random/400x400?Pizza",
  },
  {
    id: "628b5decf99b6a8dc80af3b6",
    index: 4,
    rating: 0.8644,
    promotion: null,
    isNew: true,
    categoryId: "6288a89fac9e970731bfaa7b",
    minCookTime: 70,
    maxCookTime: 90,
    restaurant: "Zanymax",
    name: "Zanymax Drinks",
    imageUrl: "https://source.unsplash.com/random/400x400?Drinks",
  },
  {
    id: "628b5dec0690be0f73109de7",
    index: 5,
    rating: 4.7915,
    promotion: "1+1",
    isNew: true,
    categoryId: "6288a89fe6c2fe0b758360fe",
    minCookTime: 90,
    maxCookTime: 110,
    restaurant: "Sunclipse",
    name: "Sunclipse Desserts",
    imageUrl: "https://source.unsplash.com/random/400x400?Desserts",
  },
  {
    id: "628b5dec146488677e4f035d",
    index: 6,
    rating: 2.607,
    promotion: "gift",
    isNew: false,
    categoryId: "6288a89f1f0152b8c2cd512b",
    minCookTime: 70,
    maxCookTime: 90,
    restaurant: "Quizmo",
    name: "Quizmo Sushi",
    imageUrl: "https://source.unsplash.com/random/400x400?Sushi",
  },
  {
    id: "628b5decf5ff6283fb4fef73",
    index: 7,
    rating: 0.1815,
    promotion: "1+1",
    isNew: false,
    categoryId: "6288a89f70dc8cf93b71609b",
    minCookTime: 70,
    maxCookTime: 90,
    restaurant: "Puria",
    name: "Puria Hot Meals",
    imageUrl: "https://source.unsplash.com/random/400x400?Hot%20Meals",
  },
  {
    id: "628b5dec03f30dceb9d78f5a",
    index: 8,
    rating: 0.2835,
    promotion: null,
    isNew: false,
    categoryId: "6288a89fe6c2fe0b758360fe",
    minCookTime: 100,
    maxCookTime: 120,
    restaurant: "Eventage",
    name: "Eventage Desserts",
    imageUrl: "https://source.unsplash.com/random/400x400?Desserts",
  },
  {
    id: "628b5dec5f76520c3a124f56",
    index: 9,
    rating: 1.6596,
    promotion: "gift",
    isNew: true,
    categoryId: "6288a89fac9e970731bfaa7b",
    minCookTime: 70,
    maxCookTime: 90,
    restaurant: "Zentia",
    name: "Zentia Drinks",
    imageUrl: "https://source.unsplash.com/random/400x400?Drinks",
  },
  {
    id: "628b5dec5690539b21937e33",
    index: 10,
    rating: 0.4329,
    promotion: "discount",
    isNew: false,
    categoryId: "6288a89fe6c2fe0b758360fe",
    minCookTime: 60,
    maxCookTime: 80,
    restaurant: "Nurali",
    name: "Nurali Desserts",
    imageUrl: "https://source.unsplash.com/random/400x400?Desserts",
  },
  {
    id: "628b5dec3bec513bdafa73b9",
    index: 11,
    rating: 2.4158,
    promotion: "discount",
    isNew: true,
    categoryId: "6288a89fe6c2fe0b758360fe",
    minCookTime: 70,
    maxCookTime: 90,
    restaurant: "Waab",
    name: "Waab Desserts",
    imageUrl: "https://source.unsplash.com/random/400x400?Desserts",
  },
  {
    id: "628b5decee12c4e4254f389c",
    index: 12,
    rating: 2.6854,
    promotion: "gift",
    isNew: true,
    categoryId: "6288a89f7338764f2071a8a8",
    minCookTime: 120,
    maxCookTime: 140,
    restaurant: "Bizmatic",
    name: "Bizmatic Pizza",
    imageUrl: "https://source.unsplash.com/random/400x400?Pizza",
  },
  {
    id: "628b5decbff03304b7f264f7",
    index: 13,
    rating: 4.4988,
    promotion: "discount",
    isNew: true,
    categoryId: "6288a89f1f0152b8c2cd512b",
    minCookTime: 70,
    maxCookTime: 90,
    restaurant: "Comtext",
    name: "Comtext Sushi",
    imageUrl: "https://source.unsplash.com/random/400x400?Sushi",
  },
];
describe("Restaurants", () => {
  it("shows loading indicator when isLoading", () => {
    useRestaurants.mockImplementation(() => ({
      isLoading: true,
      restaurants: [],
      error: false,
    }));
    render(<Restaurants />);
    expect(screen.getByRole("progressbar")).toBeTruthy();
  });

  it("shows error message if it fails to fetch restaurants", () => {
    useRestaurants.mockImplementation(() => ({
      isLoading: false,
      restaurants: [],
      error: true,
    }));
    render(<Restaurants />);
    expect(
      screen.getByText("Can not fetch the restaurants, to try again")
    ).toBeTruthy();
  });

  it("displays Show More Button if there is more restaurants to show", () => {
    useRestaurants.mockImplementation(() => ({
      isLoading: false,
      restaurants: mockRestaurants,
      error: false,
    }));
    render(<Restaurants searchText="" currentCategory="all" />);
    expect(screen.getByText(/Show More/)).toBeTruthy();
  });

  it(`shows more restaurants when click show more (default restaurants count = ${RESTAURANTS_PER_PAGE})`, () => {
    useRestaurants.mockImplementation(() => ({
      isLoading: false,
      restaurants: mockRestaurants,
      error: false,
    }));
    render(<Restaurants searchText="" currentCategory="all" />);
    expect(screen.getAllByRole("mockRestaurant")).toHaveLength(
      RESTAURANTS_PER_PAGE
    );
    fireEvent.click(screen.getByText(/Show More/));
    expect(screen.getAllByRole("mockRestaurant")).toHaveLength(
      mockRestaurants.length
    );
  });

  it("shows only selected categories", () => {
    useRestaurants.mockImplementation(() => ({
      isLoading: false,
      restaurants: mockRestaurants,
      error: false,
    }));
    render(<Restaurants searchText="" currentCategory="category 1" />);
    const categoriesLength = mockRestaurants.filter(
      (cat) => cat.categoryId === "category 1"
    ).length;
    expect(screen.getAllByRole("mockRestaurant")).toHaveLength(
      categoriesLength
    );
  });

  it("shows only restaurants matching searchText", () => {
    useRestaurants.mockImplementation(() => ({
      isLoading: false,
      restaurants: mockRestaurants,
      error: false,
    }));
    render(<Restaurants searchText="Ni" currentCategory="all" />);

    const categoriesLength = mockRestaurants.filter((cat) =>
      cat.restaurant.toLocaleLowerCase().includes("ni")
    ).length;

    expect(screen.getAllByRole("mockRestaurant")).toHaveLength(
      categoriesLength
    );
  });
});
