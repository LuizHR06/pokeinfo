import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../../../contexts/theme-context"; // Adjust the path accordingly
import { OpenModalButton } from "../OpenModalButtons";

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

describe('OpenModalButton', () => {
    it('should render the buttons correctly on the screen', async () => {
        render(
            <ThemeProvider>
                <OpenModalButton />
            </ThemeProvider>
        );

        expect(screen.getByTestId('open-modal-button')).toBeVisible();
    });
});
