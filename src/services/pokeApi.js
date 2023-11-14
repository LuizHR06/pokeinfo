export async function getPokemonList(offsetValue) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offsetValue}`)
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

export async function pokemonTypes(type) {
	const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`)
	return await response.json()
}