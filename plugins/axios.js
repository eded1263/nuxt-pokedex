import axios from 'axios'

export default () => {
  axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'
}
