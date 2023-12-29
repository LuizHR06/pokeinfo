import { fireEvent, render, screen } from "@testing-library/react"
import { BackButton } from "../BackButton"
import { BrowserRouter } from "react-router-dom"
import { createMemoryHistory } from "history"

describe('BackButton', () => {
  it('should render correctly on the screen', () => {
    render(
      <BrowserRouter history={createMemoryHistory()}>
        <BackButton />
      </BrowserRouter>
    );

    expect(screen.getByText('Back')).toBeVisible();
  });

  it('should send the user to home page when clicked', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <BackButton />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Back'));

    expect(history.location.pathname).toBe('/');
  });
});


