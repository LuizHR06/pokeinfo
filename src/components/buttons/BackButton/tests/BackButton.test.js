import { fireEvent, render, screen } from "@testing-library/react"
import { BackButton } from "../BackButton"
import { BrowserRouter } from "react-router-dom"
import { createMemoryHistory } from "history"
import { ThemeProvider } from "../../../../contexts/theme-context";

const mockTheme = {
  detailsPage: {
      color: '#000',
      background: `#FB7B7B`,
      backgroundHoverModalButtons: `#AD5A5A`,
      backgroundModals: `#d0eae9`
  },
};

jest.mock("../../../../contexts/theme-context", () => ({
  ThemeContext: {
    Consumer: ({ children }) => children({ theme: mockTheme }),
  },
}));

describe('BackButton', () => {
  it('should render correctly on the screen', () => {
    render(
      <BrowserRouter history={createMemoryHistory()}>
          <ThemeProvider>
          <BackButton />
      </ThemeProvider>
        </BrowserRouter>
    );

    expect(screen.getByTestId('BackButton')).toBeVisible();
  });

  it('should send the user to home page when clicked', () => {
    const history = createMemoryHistory();
    render(
      <ThemeProvider>
        <BrowserRouter history={history}>
          <BackButton />
        </BrowserRouter>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId('BackButton'));

    expect(history.location.pathname).toBe('/');
  });
});


