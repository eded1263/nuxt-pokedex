<template>
  <div
    v-infinite-scroll="loadMore"
    class="main-page"
    :infinite-scroll-disabled="loading"
    infinite-scroll-distance="0"
    :infinite-scroll-immediate-check="false"
  >
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
import { PokemonActions, PokemonMutations } from '~/store-types/pokemon'
import { pokemonStoreModule } from '~/store/pokemon'
import PokemonBox from '~/components/home/PokemonBox.vue'
import { IQueryParams } from '~/core/interfaces/QueryParams'

@Component({
  head(){
    return {
      title: 'DilsoDex'
    }
  },
  async fetch({ store }) {
    store.commit(`pokemon/${PokemonMutations.RESET_POKEMONS}`)
    return await store.dispatch(`pokemon/${PokemonActions.GET_POKEMONS}`)
  },
  components: { PokemonBox },
})
class IndexPage extends Vue {
  head(){
    return 'DilsoDex'
  }
  offset = 0
  limit = 20
  @pokemonStoreModule.State loading!: boolean
  @pokemonStoreModule.State total!: number
  @pokemonStoreModule.Action(PokemonActions.GET_POKEMONS)
  getPokemons!: (params?: IQueryParams) => Promise<any>

  loadMore() {
    if (this.offset < this.total) {
      this.offset += 20
      this.getPokemons({ offset: this.offset, limit: this.limit })
    }
  }
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
  height: 100vh;
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
