<template>
  <div class="pokemon-grid">
    <pokemon-card
      v-for="pokemon in pokemons"
      :key="getKeyFromPoke(pokemon)"
      :pokemon="pokemon"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PokemonCard from './PokemonCard.vue'
import { IPokemonGeneric } from '~/core/models/Pokemon'
import { pokemonStoreModule } from '~/store/pokemon'

@Component({
  // eslint-disable-next-line no-undef
  components: { PokemonCard },
})
class PokemonGrid extends Vue {
  @pokemonStoreModule.State pokemons!: IPokemonGeneric[]

  getKeyFromPoke(pokemon: IPokemonGeneric) {
    return pokemon.id ? pokemon.id : pokemon.url.split('/').reverse()[1]
  }
}

export default PokemonGrid
</script>

<style lang="scss">
@import '~/assets/scss/colors.scss';

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
