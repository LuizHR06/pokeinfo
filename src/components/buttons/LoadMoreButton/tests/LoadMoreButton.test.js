import { render, screen } from "@testing-library/react";
import { LoadMoreButton } from "../LoadMoreButton";

describe('LoadMoreButton', () => {
    it('should render the button correctly on the screen', async () => {
        render(<LoadMoreButton />);

        expect(screen.getByTestId('load-more-button')).toBeVisible()
    });
})