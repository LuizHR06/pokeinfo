import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PokemonDetails } from "../index";

describe('PokemonDetails', () => {
    it('should render all components correctly on the screen', async () => {
        render(
        <MemoryRouter initialEntries={['/pokemon/1']}>
            <PokemonDetails />
        </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByTestId('pokemon-details')).toBeInTheDocument();
        });
        expect(screen.getByTestId('pokemon-details-img')).toBeVisible();
        expect(screen.getByTestId('pokemon-name')).toBeVisible();
        expect(screen.getByTestId('pokemon-stats')).toBeVisible();
        expect(screen.getByTestId('pokemon-evolutions')).toBeVisible();
        expect(screen.getByTestId('modal-buttons')).toBeVisible();
    });
});
