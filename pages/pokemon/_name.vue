<template>
  <div class="pokemon-page">
    <pokemon-describer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { PokemonActions } from '~/store-types/pokemon'
import PokemonDescriber from '~/components/pokemon/PokemonDescriber.vue'
@Component({
  components: {PokemonDescriber},
  head(){
    return {
      title: 'Pokémon Info'
    }
  },
  async fetch({ store, params, error }) {
    return await store
      .dispatch(`pokemon/${PokemonActions.GET_POKEMON}`, params.name)
      .catch((_: any) => {
        error(Error("Pokemon not found"))
      })
  },
})
class PokemonPage extends Vue {}

export default PokemonPage
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colors.scss';

.pokemon-page {
  background: $bg;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  height: 100vh;
}
</style>
