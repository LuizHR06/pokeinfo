import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../../../contexts/theme-context.js";
import { PokemonDetails } from "../index.js";

describe('PokemonDetails', () => {
    it('should render all components correctly on the screen', async () => {
        render(
            <BrowserRouter >
                <ThemeProvider >
                    <PokemonDetails />
                </ThemeProvider >
            </BrowserRouter >
        );

        await waitFor(() => {
            expect(screen.getByTestId('pokemon-details')).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.queryByTestId('pokemon-details-loading')).not.toBeInTheDocument();
        });

        expect(screen.getByTestId('pokemon-details-img')).toBeInTheDocument();
        expect(screen.getByTestId('pokemon-name')).toBeVisible();
        expect(screen.getByTestId('pokemon-stats')).toBeVisible();
        expect(screen.getByTestId('pokemon-evolutions')).toBeVisible();
        expect(screen.getByTestId('modal-buttons')).toBeVisible();
    });
});
