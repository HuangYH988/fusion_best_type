/*Normal","Fighting","Psychic","Dark","Ghost","Bug","Dragon",
     "Flying","Fairy","Rock","Ground","Steel","Poison","Grass","Water","Ice",
     "Electric","Fire"*/
export const type_matchup_base0 = {
  normal: {
    normal: 0,
    fighting: +1,
    psychic: 0,
    dark: 0,
    ghost: -2,
    bug: 0,
    dragon: 0,
    flying: 0,
    fairy: 0,
    rock: 0,
    ground: 0,
    steel: 0,
    poison: 0,
    grass: 0,
    water: 0,
    ice: 0,
    electric: 0,
    fire: 0,
  },
  fighting: {
    normal: 0,
    fighting: 0,
    psychic: +1,
    dark: -1,
    ghost: 0,
    bug: -1,
    dragon: 0,
    flying: +1,
    fairy: +1,
    rock: -1,
    ground: 0,
    steel: 0,
    poison: 0,
    grass: 0,
    water: 0,
    ice: 0,
    electric: 0,
    fire: 0,
  },
  psychic: {
    normal: 0,
    fighting: -1,
    psychic: -1,
    dark: +1,
    ghost: +1,
    bug: +1,
    dragon: 0,
    flying: 0,
    fairy: 0,
    rock: 0,
    ground: 0,
    steel: 0,
    poison: 0,
    grass: 0,
    water: 0,
    ice: 0,
    electric: 0,
    fire: 0,
  },
  dark: {
    normal: 0,
    fighting: +1,
    psychic: -2,
    dark: -1,
    ghost: -1,
    bug: +1,
    dragon: 0,
    flying: 0,
    fairy: +1,
    rock: 0,
    ground: 0,
    steel: 0,
    poison: 0,
    grass: 0,
    water: 0,
    ice: 0,
    electric: 0,
    fire: 0,
  },
  ghost: {
    normal: -2,
    fighting: 0,
    psychic: 0,
    dark: +1,
    ghost: +1,
    bug: -1,
    dragon: 0,
    flying: 0,
    fairy: 0,
    rock: 0,
    ground: 0,
    steel: 0,
    poison: -1,
    grass: 0,
    water: 0,
    ice: 0,
    electric: 0,
    fire: 0,
  },
  bug: {
    normal: 0,
    fighting: -1,
    psychic: 0,
    dark: 0,
    ghost: 0,
    bug: 0,
    dragon: 0,
    flying: +1,
    fairy: 0,
    rock: +1,
    ground: -1,
    steel: 0,
    poison: 0,
    grass: -1,
    water: 0,
    ice: 0,
    electric: 0,
    fire: +1,
  },
  dragon: {
    normal: 0,
    fighting: 0,
    psychic: 0,
    dark: 0,
    ghost: 0,
    bug: 0,
    dragon: +1,
    flying: 0,
    fairy: +1,
    rock: 0,
    ground: 0,
    steel: 0,
    poison: 0,
    grass: -1,
    water: -1,
    ice: +1,
    electric: -1,
    fire: -1,
  },
  flying: {
    normal: 0,
    fighting: -1,
    psychic: 0,
    dark: 0,
    ghost: 0,
    bug: -1,
    dragon: 0,
    flying: 0,
    fairy: 0,
    rock: +1,
    ground: -2,
    steel: 0,
    poison: 0,
    grass: -1,
    water: 0,
    ice: +1,
    electric: +1,
    fire: 0,
  },
  fairy: {
    normal: 0,
    fighting: -1,
    psychic: 0,
    dark: -1,
    ghost: 0,
    bug: -1,
    dragon: -2,
    flying: 0,
    fairy: 0,
    rock: 0,
    ground: 0,
    steel: +1,
    poison: +1,
    grass: 0,
    water: 0,
    ice: 0,
    electric: 0,
    fire: 0,
  },
  rock: {
    normal: -1,
    fighting: +1,
    psychic: 0,
    dark: 0,
    ghost: 0,
    bug: 0,
    dragon: 0,
    flying: -1,
    fairy: 0,
    rock: 0,
    ground: +1,
    steel: +1,
    poison: -1,
    grass: +1,
    water: +1,
    ice: 0,
    electric: 0,
    fire: -1,
  },
  ground: {
    normal: 0,
    fighting: 0,
    psychic: 0,
    dark: 0,
    ghost: 0,
    bug: 0,
    dragon: 0,
    flying: 0,
    fairy: 0,
    rock: -1,
    ground: 0,
    steel: 0,
    poison: -1,
    grass: +1,
    water: +1,
    ice: +1,
    electric: -2,
    fire: 0,
  },
  steel: {
    normal: -1,
    fighting: +1,
    psychic: -1,
    dark: 0,
    ghost: 0,
    bug: -1,
    dragon: -1,
    flying: -1,
    fairy: -1,
    rock: -1,
    ground: +1,
    steel: -1,
    poison: -2,
    grass: -1,
    water: 0,
    ice: -1,
    electric: 0,
    fire: +1,
  },
  poison: {
    normal: 0,
    fighting: -1,
    psychic: +1,
    dark: 0,
    ghost: 0,
    bug: -1,
    dragon: 0,
    flying: 0,
    fairy: -1,
    rock: 0,
    ground: +1,
    steel: 0,
    poison: -1,
    grass: -1,
    water: 0,
    ice: 0,
    electric: 0,
    fire: 0,
  },
  grass: {
    normal: 0,
    fighting: 0,
    psychic: 0,
    dark: 0,
    ghost: 0,
    bug: +1,
    dragon: 0,
    flying: +1,
    fairy: 0,
    rock: 0,
    ground: -1,
    steel: 0,
    poison: +1,
    grass: -1,
    water: -1,
    ice: +1,
    electric: -1,
    fire: +1,
  },
  water: {
    normal: 0,
    fighting: 0,
    psychic: 0,
    dark: 0,
    ghost: 0,
    bug: 0,
    dragon: 0,
    flying: 0,
    fairy: 0,
    rock: 0,
    ground: 0,
    steel: -1,
    poison: 0,
    grass: +1,
    water: -1,
    ice: -1,
    electric: +1,
    fire: -1,
  },
  ice: {
    normal: 0,
    fighting: +1,
    psychic: 0,
    dark: 0,
    ghost: 0,
    bug: 0,
    dragon: 0,
    flying: 0,
    fairy: 0,
    rock: +1,
    ground: 0,
    steel: +1,
    poison: 0,
    grass: 0,
    water: 0,
    ice: -1,
    electric: 0,
    fire: +1,
  },
  electric: {
    normal: 0,
    fighting: 0,
    psychic: 0,
    dark: 0,
    ghost: 0,
    bug: 0,
    dragon: 0,
    flying: -1,
    fairy: 0,
    rock: 0,
    ground: +1,
    steel: -1,
    poison: 0,
    grass: 0,
    water: 0,
    ice: 0,
    electric: -1,
    fire: 0,
  },
  fire: {
    normal: 0,
    fighting: 0,
    psychic: 0,
    dark: 0,
    ghost: 0,
    bug: -1,
    dragon: 0,
    flying: 0,
    fairy: -1,
    rock: +1,
    ground: +1,
    steel: -1,
    poison: 0,
    grass: -1,
    water: +1,
    ice: -1,
    electric: 0,
    fire: -1,
  },
};
