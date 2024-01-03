const { render, screen } = require("@testing-library/react");
const { ThemeTogglerButton } = require("../ThemeTogglerButton");

describe('ThemeTogglerButton', () => {
  it('should render the button correctly', () => {
    render(<ThemeTogglerButton />);
    
    expect(screen.getByTestId('ThemeButton')).toBeInTheDocument()
  });
});