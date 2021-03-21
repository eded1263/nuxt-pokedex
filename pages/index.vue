<template>
  <div class="main-page">
    <div class="text">
      <span class="title"> DilsoDex </span>
      <span class="subtitle">
        A fanmade Pokedex to learn more about Nuxt!
      </span>
    </div>
    <pokemon-box class="search" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { IPokemonGeneric } from '~/core/models/Pokemon'
import { PokemonActions } from '~/store-types/pokemon'
import { pokemonStoreModule } from '~/store/pokemon'
import PokemonBox from '~/components/home/PokemonBox.vue'

@Component({
  async fetch({ store }) {
    return await store.dispatch(`pokemon/${PokemonActions.GET_POKEMONS}`)
  },
  components: { PokemonBox },
})
class IndexPage extends Vue {
  @pokemonStoreModule.State pokemons!: IPokemonGeneric
}

export default IndexPage
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colors.scss';

.main-page {
  background: $bg;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  overflow-x: hidden;
  min-height: 100vh;
  > .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    > .title {
      font-size: 32px;
    }
    > .subtitle {
      font-size: 24px;
      margin-top: 15px;
      @media screen and (max-width: 500px) {
        text-align: center;
      }
    }
  }

  > .search {
    flex: 1;
  }
}
</style>
