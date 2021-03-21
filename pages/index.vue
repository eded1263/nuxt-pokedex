<template>
  <div>app :)</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { IPokemonGeneric } from '~/core/models/Pokemon'
import { pokemonService } from '~/core/services/pokemon'
import { PokemonActions } from '~/store-types/pokemon'
import { pokemonStoreModule } from '~/store/pokemon'
@Component({
  async fetch({ store }) {
    await store.dispatch(`pokemon/${PokemonActions.GET_POKEMONS}`)
  },
})
class IndexPage extends Vue {
  @pokemonStoreModule.State pokemons!: IPokemonGeneric

  mounted() {
    console.log(this.pokemons)
  }
}

export default IndexPage
</script>

<style lang="scss" scoped>
div {
  font-size: 14px;
}
</style>
