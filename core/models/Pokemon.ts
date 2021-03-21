/* eslint-disable camelcase */
export interface IPokemonGeneric {
  name: string
  url: string
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
  slot: number
  type: {
    name: string
  }
}

export interface IPokemon extends IPokemonGeneric {
  id: number
  height: number
  order: number
  weight: number
  spites: IPokemonSprites[]
  stats: IPokemonStats[]
  types: IPokemonTypes[]
}
