import axios from 'axios'
import { IQueryParams } from '~/core/interfaces/QueryParams'
class PokemonService {
  public getPokemons(query?: IQueryParams) {
    return axios.get<any>(`/pokemon`, {
      params: query,
    })
  }

  public getPokemon(id: number) {
    return axios.get<any>(`/pokemon/${id}`)
  }
}
const pokemonService = new PokemonService()

export { pokemonService }
