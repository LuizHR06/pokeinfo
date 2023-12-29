import { render, screen } from "@testing-library/react";
import { Main } from "../Main";

describe('Main', () => {
    it('should render the components correctly on the screen', () => {
        render(<Main />);

        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('filter-type-buttons')).toBeInTheDocument();
        expect(screen.getByTestId('pokemonSearch')).toBeInTheDocument();
        expect(screen.getByTestId('pokemonList')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
})