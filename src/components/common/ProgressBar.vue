<template>
  <div :class="$style.progressBar">
    <div :class="$style.flexWrapper">
      <div :class="$style.counterDay">
        {{ countCompletedDeliveries() }}
      </div>
      <span>
        <div :class="$style.packageName">{{ order.packageName }}</div>
        <div :class="$style.packageCalories">{{ order.packageCalories }}</div>
      </span>
    </div>
    <input
      :class="$style.inputRange"
      type="range"
      min="0"
      :value="this.inputValue"
      :max="order.deliveries.length"
    />
    <div :class="$style.counterDays">
      <span>{{ firstDelivery }}</span>
      <span :class="$style.daysLeft">
        Осталось {{ validateDay(order.deliveries.length - inputValue) }}
      </span>
      <span>{{ lastDelivery }}</span>
    </div>
  </div>
</template>

<script>
import { date } from '@/application/date'

export default {
  props: {
    order: Object
  },

  data() {
    return {
      inputValue: 0
    }
  },

  computed: {
    firstDelivery() {
      const delivery = this.order.deliveries[0]
      let day = delivery.date.slice(8, 10)
      let month = new Date(delivery.date).getMonth()
      return `${day < 10 ? day.slice(1, 2) : day} ${
        date.shortMonths[month + 1]
      }`
    },

    lastDelivery() {
      const delivery = this.order.deliveries[this.order.deliveries.length - 1]
      let day = delivery.date.slice(8, 10)
      let month = new Date(delivery.date).getMonth()
      return `${day < 10 ? day.slice(1, 2) : day} ${
        date.shortMonths[month + 1]
      }`
    }
  },

  methods: {
    getInputValue() {
      this.$emit('getInputValue', this.inputValue)
    },

    countCompletedDeliveries() {
      const dateNow = new Date()
      let count = 0

      this.order.deliveries.forEach((elem) => {
        const date = new Date(elem.date)
        if (date <= dateNow) {
          count++
        }
      })

      this.inputValue = count

      return this.validateDay(count)
    },

    validateDay(num) {
      if (num === 1) return `${num} день`
      if (num > 1 && num < 5) return `${num} дня`
      if (num === 0 || num >= 5) return `${num} дней`
    }
  },

  mounted() {
    this.getInputValue()
  }
}
</script>

<style lang="scss" module>
@import '@/assets/styles/fonts';

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
    overflow: hidden;
    width: 100%;
    -webkit-appearance: none;
    background-color: $medium-gray;
    border-radius: 0.25rem;
    pointer-events: none;

    &::-webkit-slider-thumb {
      width: 0.344rem;
      height: 0.344rem;
      border-radius: 2px;
      -webkit-appearance: none;
      background: $white;
      box-shadow: -100rem 7rem 0 100rem $blue;
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