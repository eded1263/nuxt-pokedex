/* eslint-disable camelcase */
export interface IPokemonGeneric {
  name: string
  url: string
  id: string
}

export interface IPokemonSprites {
  front_default: string
  front_shiny: string
}

export interface IPokemonStats {
  base_stat: number
  stat: {
    name: string
  }
}

export interface IPokemonTypes {
  Slot: number
  Type: {
    Name: string
  }
}

export interface IPokemon extends IPokemonGeneric {
  height: number
  order: number
  weight: number
  sprites: IPokemonSprites
  stats: IPokemonStats[]
  types: IPokemonTypes[]
}
