import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Page", () => {
	it("renders a heading", () => {
		render(<Button />);

		const button = screen.getByRole("button", { name: /button/i });
		expect(button).toBeInTheDocument();
	});
});
