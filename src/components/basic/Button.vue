<template>
  <button :class="$style.button" @click="$emit('click')"><slot /></button>
</template>

<style lang="scss" module>
@import '@/assets/styles/fonts';

.button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  outline: none;
  border: none;
  @include text;
  font-weight: 400;
  letter-spacing: -0.41px;
  cursor: pointer;

  &:first-child {
    border-bottom: 1px solid $line-gray;
  }
}
</style>