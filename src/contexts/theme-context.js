import { createContext, useState } from 'react'
import { colors } from '../data/variables'

export const themes = {
    light: {
        ThemeButtonColor: '#fff',
        ThemeButtonBackground: '#262626',

        HeaderFooterBackground: `${colors.primaryRed}`,

        TypeButtonsSectionTitlesBackground: `${colors.secondaryRed}`,

        PokemonListsBackground: `${colors.terciaryBlue}`,

        ButtonsTextColor: '#000',
        ModalButtonsBackground: `${colors.primaryPink}`,
        ModalButtonsHoverBackground: `${colors.fourthPink}`,
        ModalsBackground: `${colors.secondaryBlue}`

    },
    dark: {
        ThemeButtonColor: '#000',
        ThemeButtonBackground: '#fff',

        HeaderFooterBackground: `${colors.fifthBlue}`,

        TypeButtonsSectionTitlesBackground: `${colors.fourthBlue}`,

        PokemonListsBackground: `${colors.sixthBlue}`,

        ButtonsTextColor: '#ccc',
        ModalButtonsBackground: `${colors.seventhBlue}`,
        ModalButtonsHoverBackground: `${colors.eighthBlue}`,
        ModalsBackground: `${colors.ninthBlue}`
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}