import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../../../contexts/theme-context.js"; 
import { PokemonDetails } from "../index.js";

const mockTheme = {
    detailsPage: {
        color: "#000",
        background: "#ff00ff",
    },
};

jest.mock("../../../contexts/theme-context.js", () => ({
    ThemeContext: {
        Consumer: ({ children }) => children({ theme: mockTheme }),
    },
}));

describe('PokemonDetails', () => {
    it('should render all components correctly on the screen', async () => {
        render(
            <MemoryRouter initialEntries={['/pokemon/1']}>
                <ThemeProvider>
                    <PokemonDetails />
                </ThemeProvider>
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
