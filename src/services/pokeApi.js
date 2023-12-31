export async function getPokemonList(limit, offsetValue) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offsetValue}`)
	return await response.json()
}

export async function pokemonDetails(name) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
	return await response.json()
}

export async function pokemonAbilities(skillName){
	const response = await fetch(`https://pokeapi.co/api/v2/ability/${skillName}/`)
	return await response.json()
}

export async function pokemonTypes() {
	const response = await fetch(`https://pokeapi.co/api/v2/type`)
	return await response.json()
}

export async function pokemonGenerations() {
	const response = await fetch(`https://pokeapi.co/api/v2/version-group/`)
	return await response.json()
}

export async function pokemonSpecies(pokeName) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeName}`)
	return await response.json()
}