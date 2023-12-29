import { render, screen } from "@testing-library/react";
import { OpenModalButton } from "../OpenModalButtons";

describe('LoadMoreButton', () => {
    it('should render the buttons correctly on the screen', async () => {
        render(<OpenModalButton />);

        expect(screen.getByTestId('open-modal-button')).toBeVisible()
    });
})