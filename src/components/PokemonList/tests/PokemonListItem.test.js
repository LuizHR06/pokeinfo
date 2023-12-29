import { fireEvent, render, screen } from "@testing-library/react";
import { PokemonListItem, PokemonListItemFiltered } from "../PokemonListItem"
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

describe('PokemonListItem', () => {
    it('should render the pokemons correctly on the screen', async () => {
        render(
            <BrowserRouter>
                <PokemonListItem />
            </BrowserRouter>
        );

        expect(screen.getByTestId('pokemon-list-item')).toBeInTheDocument();
    });

    it('should send the user to the details page of the pokemon when clicked', () => {
        const history = createMemoryHistory({ initialEntries: ['/details'] }); // Set initial entry
        render(
            <BrowserRouter history={history}>
                <PokemonListItem />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByTestId('pokemon-list-item'));

        expect(history.location.pathname).toBe('/details');
    });

});


describe('PokemonListItemFiltered', () => {
    it('should render the filtered pokemons correctly on the screen', async () => {
        render(
            <BrowserRouter>
                <PokemonListItemFiltered />
            </BrowserRouter>
        );

        expect(screen.getByTestId('pokemon-list-item-filtered')).toBeInTheDocument();
    });

    it('should send the user to the details page of the pokemon when clicked', () => {
        const history = createMemoryHistory({ initialEntries: ['/details'] }); // Set initial entry
        render(
            <BrowserRouter history={history}>
                <PokemonListItemFiltered />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByTestId('pokemon-list-item-filtered'));

        expect(history.location.pathname).toBe('/details');
    });

});