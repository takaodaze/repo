import { render, screen } from "@testing-library/react";
import { MyComponent } from "../component/MyComponent/MyComponent";
import { add } from "./sample";

test("sample", () => {
    expect(add(1, 3)).toBe(4);
});

test("render MyComponent", () => {
    render(<MyComponent />);
    expect(screen.getByText("hello test!")).toBeInTheDocument();
});
