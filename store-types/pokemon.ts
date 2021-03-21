import { ActionContext, ActionTree, MutationTree } from 'vuex/types'
import { IQueryParams } from '~/core/interfaces/QueryParams'
import { IPokemon, IPokemonGeneric } from '~/core/models/Pokemon'

export interface IPokemonState {
  pokemons: IPokemonGeneric[]
  pokemon: IPokemon
  loading: boolean
  total: number
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
  SET_LOADING = 'SET_LOADING',
  SET_TOTAL = 'SET_TOTAL',
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
  GET_POKEMONS: (
    ctx: PokemonActionContext,
    query?: IQueryParams
  ) => Promise<any>
}

export interface IPokemonMutations extends MutationTree<IPokemonState> {
  SET_POKEMONS: (state: IPokemonState, pokemons: IPokemonGeneric[]) => void
  SET_POKEMON: (state: IPokemonState, pokemons: IPokemon) => void
  SET_LOADING: (state: IPokemonState, loading: boolean) => void
  SET_TOTAL: (state: IPokemonState, total: number) => void
  RESET_POKEMONS: (state: IPokemonState, pokemons: IPokemon) => void
}

export interface IPokemonStore {
  state: () => IPokemonState
  actions: IPokemonActions
  mutations: IPokemonMutations
}
