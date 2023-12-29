import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FilterGenerationButton } from "../FilterGenerationButon";
import { pokemonGenerations } from "../../../../services/pokeApi";

jest.mock("../../../../services/pokeApi");

describe('FilterGenerationButton', () => {
    it('should render all generation names correctly on the screen', async () => {
        render(<FilterGenerationButton />);

        await waitFor(() => {
            return screen.getByTestId('select-generation-input');
        });

        const selectElement = screen.getByTestId('select-generation-input');
        const generationOptions = Array.from(selectElement.children).map(option => option.textContent); // eslint-disable-line testing-library/no-node-access

        generationOptions.forEach(name => {
            expect(screen.getByText(name)).toBeInTheDocument();
        });
    });

    it('should fetch data from the API when the input changes', async () => {
      
        const mockPokemonGenerations = jest.fn(() => Promise.resolve({ results: [] }));
        pokemonGenerations.mockImplementation(mockPokemonGenerations);

        const mockOnButtonClick = jest.fn();

        render(<FilterGenerationButton onButtonClick={mockOnButtonClick} />);

        const dropdown = screen.getByTestId('select-generation-input');
        fireEvent.change(dropdown, { target: { value: 'x-y' } });

        await waitFor(() => {
            expect(mockPokemonGenerations).toHaveBeenCalledWith();
        });
    });
});
