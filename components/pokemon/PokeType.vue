<template>
  <div :class="['pokemon-type', `-${type.type.name}`]">
    {{ type.type.name }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
class PokeType extends Vue {
  @Prop({ required: true }) type!: string
}

export default PokeType
</script>

<style lang="scss" scoped>
@import '~/assets/scss/colors.scss';

.pokemon-type {
  text-transform: capitalize;
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 50px;
  margin-left: 5px;
  &.-fire {
    background-color: $fire;
  }
  &.-flying {
    background-color: $flying;
  }
  &.-bug {
    background-color: $bug;
  }
  &.-dark {
    background-color: $dark;
  }
  &.-dragon {
    background-color: $dragon;
  }
  &.-electric {
    background-color: $electric;
    color: $black;
  }
  &.-fairy {
    background-color: $fairy;
  }
  &.-fighting {
    background-color: $fighting;
  }
  &.-ghost {
    background-color: $ghost;
  }
  &.-grass {
    background-color: $grass;
  }
  &.-ground {
    background-color: $ground;
  }
  &.-ice {
    background-color: $ice;
  }
  &.-normal {
    background-color: $normal;
  }
  &.-poison {
    background-color: $poison;
  }
  &.-psychic {
    background-color: $psychic;
  }
  &.-rock {
    background-color: $rock;
  }
  &.-steel {
    background-color: $steel;
  }
  &.-water {
    background-color: $water;
  }
}
</style>
