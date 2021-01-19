import axios from 'axios'
import { IQueryParams } from '~/core/interfaces/QueryParams'
class PokemonService {
  private url = '/api'
  public getPokemons(query: IQueryParams) {
    return axios.get(`${this.url}/pokemon`, {
      params: query,
    })
  }
}
const pokemonService = new PokemonService()

export { pokemonService }
