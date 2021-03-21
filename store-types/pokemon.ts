import { ActionContext, ActionTree, MutationTree } from 'vuex/types'
import { IPokemon, IPokemonGeneric } from '~/core/models/Pokemon'

export interface IPokemonState {
  pokemons: IPokemonGeneric[]
  pokemon: IPokemon
}

export enum PokemonActions {
  GET_POKEMONS = 'GET_POKEMONS',
  GET_POKEMON = 'GET_POKEMON',
  GET_SEARCH_POKEMON = 'GET_SEARCH_POKEMON',
}

export enum PokemonMutations {
  SET_POKEMONS = 'SET_POKEMONS',
  SET_POKEMON = 'SET_POKEMON',
  RESET_POKEMONS = 'RESET_POKEMONS',
}

export type PokemonActionContext = ActionContext<
  IPokemonState,
  { pokemon: IPokemonState }
>

export interface IPokemonActions
  extends ActionTree<IPokemonState, { pokemon: IPokemonState }> {
  GET_POKEMON: (
    ctx: PokemonActionContext,
    pokemon: number | string
  ) => Promise<any>
  GET_SEARCH_POKEMON: (
    ctx: PokemonActionContext,
    pokemon: number | string
  ) => Promise<any>
  GET_POKEMONS: (ctx: PokemonActionContext) => Promise<any>
}

export interface IPokemonMutations extends MutationTree<IPokemonState> {
  SET_POKEMONS: (state: IPokemonState, pokemons: IPokemonGeneric[]) => void
  SET_POKEMON: (state: IPokemonState, pokemons: IPokemon) => void
  RESET_POKEMONS: (state: IPokemonState, pokemons: IPokemon) => void
}

export interface IPokemonStore {
  state: () => IPokemonState
  actions: IPokemonActions
  mutations: IPokemonMutations
}
