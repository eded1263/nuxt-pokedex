<template>
  <div class="pokemon-describer">
    <el-button round class="back" @click="goBack"
      ><i class="el-icon-back"></i> Back</el-button
    >
    <div class="sprites">
      <img :src="image" class="image" alt="Pokemon Image" />
      <el-switch
        v-model="showShiny"
        active-text="Shiny"
        inactive-text="Regular"
      >
      </el-switch>
    </div>
    <div class="info">
      <div class="name">
        <span class="id">#{{ pokemon.id }}</span>
        <span class="name">{{ pokemon.name }}</span>
        <poke-type
          v-for="(type, index) in pokemon.types"
          :key="`${index + 7}-${id}`"
          :type="type"
          class="type"
        />
      </div>
      <div class="stats">
        <div
          v-for="(stat, index) in pokemon.stats"
          :key="`${id}-${index}`"
          class="stat"
        >
          <span class="name">{{ stat.stat.name.replace('-', ' ') }}:</span>
          <span class="value">{{ stat.base_stat || 'None' }}</span>
        </div>
        <div class="stat">
          <span class="name">Height:</span>
          <span class="value">{{ pokemon.height * 10 }} cm</span>
        </div>
        <div class="stat">
          <span class="name">Weight:</span>
          <span class="value">{{ pokemon.weight / 10 }} kg</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PokeType from './PokeType.vue'
import { IPokemon } from '~/core/models/Pokemon'
import { pokemonStoreModule } from '~/store/pokemon'

@Component({
  components: { PokeType },
})
class PokemonPage extends Vue {
  @pokemonStoreModule.State pokemon!: IPokemon
  showShiny: boolean = false

  get image() {
    return this.showShiny
      ? this.pokemon.sprites.front_shiny
      : this.pokemon.sprites.front_default
  }

  goBack() {
    this.$router.push('/')
  }
}

export default PokemonPage
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colors.scss';

.pokemon-describer {
  background: $whitebg;
  display: flex;
  padding: 50px;
  border-radius: 10px;
  box-shadow: $shadow -8px 8px 20px 4px;
  position: relative;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 80%;
    align-items: center;
  }

  > .back {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  > .sprites {
    display: flex;
    flex-direction: column;

    > .image {
      border-radius: 50%;
      border: solid 1px $black;
      margin-bottom: 15px;
    }
  }

  > .info {
    margin-left: 30px;
    @media screen and (max-width: 500px) {
      margin-top: 10px;
    }
    > .name {
      text-transform: capitalize;
      font-size: 18px;
      display: flex;
      align-items: baseline;
      > .id {
        font-size: 13px;
        color: $lightGray;
        margin-right: 3px;
      }
    }
    > .stats {
      margin-top: 10px;
      > .stat {
        display: grid;
        grid-template-columns: 1fr 0.7fr;
        gap: 5px;
        @media screen and (max-width: 500px) {
          grid-template-columns: 1fr 0.5fr;
          gap: 0;
        }
        > .name {
          text-transform: capitalize;
        }
        > .value {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>
