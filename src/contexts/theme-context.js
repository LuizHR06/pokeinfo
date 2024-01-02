import { createContext, useState } from 'react'
import { colors } from '../data/variables'

export const themes = {
    light: {
        togglerButton: {
            color: '#fff',
            background: '#262626'
        },

        header_Footer: {
            background: `${colors.primaryRed}`
        },

        typeButtonsSection_Titles: {
            background: `${colors.secondaryRed}`
        },

        pokemonLists: {
            background: `${colors.terciaryBlue}`
        },

        detailsPage: {
            color: '#000',
            background: `${colors.primaryPink}`,
            backgroundHoverModalButtons: `${colors.fourthPink}`,
            backgroundModals: `${colors.secondaryBlue}`
        }
    },
    dark: {
        togglerButton: {
            color: '#000',
            background: '#fff'
        },

        header_Footer: {
            background: `${colors.fifthBlue}`
        },

        typeButtonsSection_Titles: {
            background: `${colors.fourthBlue}`
        },

        pokemonLists: {
            background: `${colors.sixthBlue}`
        },

        detailsPage: {
            color: '#ccc',
            background: `${colors.seventhBlue}`,
            backgroundHoverModalButtons: `${colors.eighthBlue}`,
            backgroundModals: `${colors.ninthBlue}`
        }
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light) 

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}