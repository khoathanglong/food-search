import { PromotionIcon } from "../PromotionIcon";
import { render, screen } from "@testing-library/react";

describe("PromotionIcon", () => {
  it('renders CardGiftcard Icon if props.promotion === "gift"', () => {
    render(<PromotionIcon promotion="gift" />);
    expect(screen.queryByTestId("CardGiftcardIcon")).toBeTruthy();
  });

  it('renders Percent Icon if props.promotion === "discount"', () => {
    render(<PromotionIcon promotion="discount" />);
    expect(screen.queryByTestId("PercentIcon")).toBeTruthy();
  });

  it('renders CardGiftcard Icon if props.promotion === "1+1"', () => {
    render(<PromotionIcon promotion="1+1" />);
    expect(screen.getByText("1+1")).toBeInTheDocument();
  });

  it("returns null if promotion is not discount, gift or 1+1", () => {
    const { container } = render(<PromotionIcon />);
    expect(container).toBeEmptyDOMElement();
  });
});
