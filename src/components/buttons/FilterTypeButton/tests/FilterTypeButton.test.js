import { render, screen, waitFor } from "@testing-library/react"
import { FilterTypeButton } from "../FilterTypeButton";

describe('FilterTypeButton', () => {
    it('should render all buttons correctly on the screen', async () => {
        render(<FilterTypeButton />);

        await waitFor(() => {
            return screen.getAllByTestId('type-button');
        });

        const selectElements = screen.getAllByTestId('type-button');
        selectElements.forEach((selectElement) => {
            const typeButtons = Array.from(selectElement.children).map(type => type.textContent); // eslint-disable-line testing-library/no-node-access

            typeButtons.forEach(name => {
                expect(screen.getByText(name)).toBeInTheDocument();
            });
        });
    });
})