import { Categories } from "../Categories";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useCategories } from "../../hooks";

jest.mock("../../hooks", () => {
  const originalModule = jest.requireActual("../../hooks");
  return {
    __esModule: true,
    ...originalModule,
    useCategories: jest.fn(),
  };
});

describe("Categories", () => {
  it("shows loading indicator when isLoading", () => {
    useCategories.mockImplementation(() => ({
      isLoading: true,
      error: false,
      categories: [],
    }));
    render(<Categories />);
    expect(screen.getByRole("progressbar")).toBeTruthy();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders only 'All' button if error to fetch categories", async () => {
    useCategories.mockImplementation(() => ({
      isLoading: false,
      error: true,
      categories: [],
    }));

    render(<Categories />);
    const buttons = await screen.findAllByRole("button");
    expect(buttons).toHaveLength(1);
    expect(screen.queryByText("All")).toBeTruthy();
  });

  it("renders fetched categories correctly", async () => {
    useCategories.mockImplementation(() => ({
      isLoading: false,
      error: false,
      categories: [{ id: "sushiId", name: "Sushi" }],
    }));

    render(<Categories />);
    const buttons = await screen.findAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[1]).toHaveTextContent("Sushi");
  });

  it("calls props.onChange with correct params when click a button", () => {
    const onChange = jest.fn();
    useCategories.mockImplementation(() => ({
      isLoading: false,
      error: false,
      categories: [{ id: "sushiId", name: "Sushi" }],
    }));
    render(<Categories onChange={onChange} />);
    // click on All button
    fireEvent.click(screen.getByText("All"));
    expect(onChange).toBeCalledWith("all");
    //click on Sushi button
    fireEvent.click(screen.getByText("Sushi"));
    expect(onChange).toBeCalledWith("sushiId");
  });

  it("shows contained currentCategory button", () => {
    useCategories.mockImplementation(() => ({
      isLoading: false,
      error: false,
      categories: [{ id: "sushiId", name: "Sushi" }],
    }));
    render(<Categories currentCategory="sushiId" />);

    const currentButton = screen.getByText("Sushi");
    expect(currentButton).toHaveClass("MuiButton-contained");
  });
});
