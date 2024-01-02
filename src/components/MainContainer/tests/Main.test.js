import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "../../../contexts/theme-context.js";
import Main from "../Main.js";

const mockTheme = {
  header_Footer: {
    background: "#ff0000",
  },
};

jest.mock("../../../contexts/theme-context", () => ({
  ThemeContext: {
    Consumer: ({ children }) => children({ theme: mockTheme }),
  },
}));

describe('Main', () => {
  it('should render the components correctly on the screen', () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('filter-type-buttons')).toBeInTheDocument();
    expect(screen.getByTestId('pokemonSearch')).toBeInTheDocument();
    expect(screen.getByTestId('pokemonList')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
