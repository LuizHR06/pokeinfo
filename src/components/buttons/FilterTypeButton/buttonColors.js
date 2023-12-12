export const ButtonColors = (typeName) => {
    switch (typeName) {
        case 'normal':
            return '#aa9'
        case 'fighting':
            return '#b54'
        case 'flying':
            return '#89f'
        case 'poison':
            return '#a59'
        case 'ground':
            return '#db5'
        case 'rock':
            return '#ba6'
        case 'bug':
            return '#ab2'
        case 'ghost':
            return '#66b'
        case 'steel':
            return '#aab'
        case 'fire':
            return '#f42'
        case 'water':
            return '#39f'
        case 'grass':
            return '#7c5'
        case 'electric':
            return '#fc3'
        case 'psychic':
            return '#f59'
        case 'ice':
            return '#6cf'
        case 'dragon':
            return '#76e'
        case 'dark':
            return '#754'
        case 'fairy':
            return '#e9e'
        default:
            return 'white';
    }
}