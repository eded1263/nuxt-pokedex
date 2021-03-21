import { namespace } from 'vuex-class'

import { pokemonService } from '~/core/services/pokemon'
import { IPokemonStore, PokemonMutations } from '~/store-types/pokemon'

export const store: IPokemonStore = {
  state: () => ({
    loading: false,
    total: 0,
    pokemons: [],
    pokemon: {
      id: '',
      name: '',
      url: '',
      weight: 0,
      height: 0,
      order: 0,
      spites: [],
      stats: [],
      types: [],
    },
  }),
  actions: {
    GET_POKEMONS: ({ commit }, query) => {
      commit(PokemonMutations.SET_LOADING, true)
      return pokemonService.getPokemons(query).then((response) => {
        commit(PokemonMutations.SET_TOTAL, response.data.count)
        commit(PokemonMutations.SET_POKEMONS, response.data.results)
        commit(PokemonMutations.SET_LOADING, false)
      })
    },
    GET_POKEMON: ({ commit }, id) => {
      return pokemonService.getPokemon(id).then((response) => {
        commit(PokemonMutations.SET_POKEMON, response.data)
      })
    },
    GET_SEARCH_POKEMON: ({ commit }, id) => {
      return pokemonService.getPokemon(id).then((response) => {
        commit(PokemonMutations.RESET_POKEMONS)
        commit(PokemonMutations.SET_TOTAL, 1)
        commit(PokemonMutations.SET_POKEMONS, [response.data])
      })
    },
  },
  mutations: {
    SET_POKEMONS: (state, pokemons) => {
      state.pokemons = [...state.pokemons, ...pokemons]
    },
    SET_POKEMON: (state, pokemon) => {
      state.pokemon = pokemon
    },
    RESET_POKEMONS: (state) => {
      state.pokemons = []
    },
    SET_LOADING: (state, loading) => {
      state.loading = loading
    },
    SET_TOTAL: (state, total) => {
      state.total = total
    },
  },
}

export const { state, actions, mutations } = store
export const pokemonStoreModule = namespace('pokemon/')
