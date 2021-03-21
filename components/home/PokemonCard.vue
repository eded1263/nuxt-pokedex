<template>
  <div class="pokemon-card" @click="goToPokemon">
    <div class="image">
      <img :src="imageUrl" alt="Pokemon Sprite" />
    </div>
    <div class="info">
      <span class="id">#{{ id }}</span>
      <span class="name">{{ pokemon.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IPokemonGeneric } from '~/core/models/Pokemon'

@Component
class PokemonCard extends Vue {
  @Prop({ required: true }) pokemon!: IPokemonGeneric

  get id() {
    let id: string
    if (this.pokemon.id) {
      id = this.pokemon.id
    } else {
      id = this.pokemon.url.split('/').reverse()[1]
    }
    return id
  }

  get imageUrl() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
  }

  goToPokemon() {
    this.$router.push({
      name: 'pokemon-name',
      params: {
        name: this.pokemon.name,
      },
    })
  }
}

export default PokemonCard
</script>

<style lang="scss">
@import '~/assets/scss/colors.scss';

.pokemon-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  > .info {
    .id {
      font-size: 11px;
      color: $lightGray;
    }
    > .name {
      text-transform: capitalize;
    }
  }
}
</style>
