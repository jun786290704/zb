<template>
  <button @click="$emit('click')" :disabled="disabled" :class="{'disabled': disabled, 'secondary': this.secondary}">
    <span class="text" :class="secondary && 'whiteText'">
      <img v-if="duelButton" src="../../assets/swordsIcon.svg" alt="button icon">
      {{ buttonText }}
    </span>
    <span v-if="secondary" class="subtext" :class="secondary && 'whiteText'">{{
      buttonsubText
    }}</span>
  </button>
</template>

<script>
export default {
  props: {
    secondary: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    duelButton: {
      type: Boolean,
      default: false
    },
    buttonText: String,
    buttonsubText: String,
  },
};
</script>

<style scoped lang="scss">

button {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  background-image: url('../../assets/buttonOutline.svg');
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  object-fit: fill;
  border: none;

  img {
    height: 1.25rem;
    width: 1.25rem;
    margin-right: 0.5rem;
    margin-top: -4px;
  }

  &.secondary {
    background-color:#141414;
    border: 1px solid #edcd90;
    border-radius: 5px;
    padding: 0.75rem;
    background-image: none;
    border: 1px solid #ffffff50;
    &.disabled {
      pointer-events: none;
      opacity: 50%;
    }
  }

  .text {
    display: flex;
    margin: 0;
    margin-bottom: -4px;
    align-items: center;
    vertical-align: middle;
    font-size: 1rem;
    white-space: nowrap;
    font-weight: 200;
    font-family: 'Trajan';
    color: #EDCD90;
  }
  .whiteText {
    font-weight: 400;
    font-family: 'Roboto';
    color: white;
  }
  .subtext {
    font-size: 0.75rem;
    color: #b4b0a7;
    margin-top: 0.25rem;
    font-family: 'Roboto';
    &.whiteText {
      color: white;
    }
  }
}
.disabled {
  pointer-events: none;
  opacity: 50%;
}
</style>