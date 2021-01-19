<template>
  <div>app :)</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { pokemonService } from '~/core/services/pokemon'

@Component({})
class IndexPage extends Vue {
  created() {
    pokemonService
      .getPokemons({ limit: 10, offset: 0 })
      .then(({ data }: any) => {
        const { results } = data
        console.log(results)
      })
  }
}

export default IndexPage
</script>

<style lang="scss" scoped>
div {
  font-size: 14px;
}
</style>
