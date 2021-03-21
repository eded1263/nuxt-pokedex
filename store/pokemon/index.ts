import { namespace } from 'vuex-class'

import { pokemonService } from '~/core/services/pokemon'
import { IPokemonStore, PokemonMutations } from '~/store-types/pokemon'

export const store: IPokemonStore = {
  state: () => ({
    pokemons: [],
    pokemon: {
      id: 0,
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
    GET_POKEMONS: ({ commit }) => {
      return pokemonService.getPokemons().then((response) => {
        commit(PokemonMutations.SET_POKEMONS, response.data.results)
      })
    },
    GET_POKEMON: ({ commit }, id) => {
      return pokemonService.getPokemon(id).then((response) => {
        commit(PokemonMutations.SET_POKEMON, response.data)
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
  },
}

export const { state, actions, mutations } = store
export const pokemonStoreModule = namespace('pokemon/')
