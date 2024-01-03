import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../../../contexts/theme-context"; // Adjust the path accordingly
import { OpenModalButton } from "../OpenModalButtons";

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
