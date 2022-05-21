import { render, screen } from "@testing-library/react";
import { MyComponent } from "../component/MyComponent/MyComponent";

test("render MyComponent", () => {
    render(<MyComponent />);
    expect(screen.getByText("hello test!")).toBeInTheDocument();
});
