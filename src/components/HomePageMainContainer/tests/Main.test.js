import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../../contexts/theme-context"; // Use the mock ThemeProvider
import { Main } from "../Main";

describe("Main", () => {
  it("should render the components correctly on the screen", () => {
    render(
      <BrowserRouter>
        <ThemeProvider >
          <Main />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("ThemeButton")).toBeInTheDocument();
    expect(screen.getByTestId("FilterTypeButton")).toBeInTheDocument();
    expect(screen.getByTestId("PokemonSearch")).toBeInTheDocument();
    expect(screen.getByTestId("PokemonList")).toBeInTheDocument();
    expect(screen.getByTestId("BackToTopButton")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
