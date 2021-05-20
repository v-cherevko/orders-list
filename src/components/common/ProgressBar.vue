<template>
  <div :class="$style.progressBar">
    <div :class="$style.flexWrapper">
      <div :class="$style.counterDay">6 дней</div>
      <span>
        <div :class="$style.packageName">PRO рацион</div>
        <div :class="$style.packageCalories">2000 кКал</div>
      </span>
    </div>
    <input :class="$style.inputRange" type="range" @change="changeInputValue" />
    <div :class="$style.counterDays">
      <span>20 окт</span>
      <span :class="$style.daysLeft">Осталось 25 дней</span>
      <span>10 ноя</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeInputValue() {
      const inputRange = this.$el.children[1];
      inputRange.style.background = `linear-gradient(to right, #1E6FB9 0%, #1E6FB9 ${inputRange.value}%, #E9E9E9 ${inputRange.value}%, #E9E9E9 100%)`;
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/fonts";

.progressBar {
  .flexWrapper {
    display: flex;
    justify-content: space-between;
    width: 95%;

    .counterDay {
      @include title;
    }

    .packageName {
      margin: 0.2rem 0 0;
      @include smallText;
    }

    .packageCalories {
      @include subtext;
    }
  }

  .inputRange {
    width: 100%;
    height: 0.346rem;
    margin: 1.188rem 0 0.484rem;
    background: linear-gradient(
      to right,
      $blue 0%,
      $blue 50%,
      $medium-gray 50%,
      $medium-gray 100%
    );
    border-radius: 0.5rem;
    outline: none;
    transition: all 0.3s ease-in;
    -webkit-appearance: none;
    pointer-events: none;

    &::-webkit-slider-thumb {
      width: 5.5px;
      height: 5.5px;
      border-radius: 50%;
      -webkit-appearance: none;
      background: $white;
    }
  }

  .counterDays {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include smallText;
    font-weight: normal;
    font-size: 0.688rem;

    .daysLeft {
      color: $black;
    }
  }
}
</style>