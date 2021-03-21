<template>
  <div class="pokemon-box">
    <el-form class="bar">
      <el-input
        v-model="search"
        class="input"
        prefix-icon="el-icon-search"
        placeholder="Charizard, Pikachu, whatever you want..."
      />
      <el-button class="btn" @click="doSearch">Search</el-button>
      <el-button class="btn" type="danger" plain @click="resetSearch">
        Reset
      </el-button>
    </el-form>
    <pokemon-grid class="grid" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PokemonGrid from './PokemonGrid.vue'
import { PokemonActions, PokemonMutations } from '~/store-types/pokemon'
import { pokemonStoreModule } from '~/store/pokemon'
import { IQueryParams } from '~/core/interfaces/QueryParams'

@Component({
  // eslint-disable-next-line no-undef
  components: { PokemonGrid },
})
class PokemonBox extends Vue {
  @pokemonStoreModule.Action(PokemonActions.GET_SEARCH_POKEMON)
  getPokemon!: (name: string) => Promise<any>

  @pokemonStoreModule.Action(PokemonActions.GET_POKEMONS)
  getPokemons!: (params?: IQueryParams) => Promise<any>

  @pokemonStoreModule.Mutation(PokemonMutations.RESET_POKEMONS)
  resetPokemons!: () => Promise<any>

  search = ''

  doSearch() {
    this.getPokemon(this.search.toLowerCase())
  }

  resetSearch() {
    this.search = ''
    this.resetPokemons()
    this.getPokemons()
  }
}

export default PokemonBox
</script>

<style lang="scss">
@import '~/assets/scss/colors.scss';

.pokemon-box {
  background: $whitebg;
  margin: 10px;
  width: 50%;
  border-radius: 10px;
  box-shadow: $shadow -8px 8px 20px 4px;
  padding: 10px;
  > .bar {
    display: flex;
  }
  > .grid {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
}
</style>
