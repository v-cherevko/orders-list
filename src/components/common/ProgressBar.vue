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
      <span>{{ firstDelivery() }}</span>
      <span :class="$style.daysLeft">Осталось {{ daysLeft() }}</span>
      <span>{{ lastDelivery() }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: Object,
  },

  data() {
    return {
      months: [
        "янв",
        "фев",
        "мар",
        "апр",
        "мая",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
      ],
      inputValue: 0,
    };
  },

  methods: {
    getInputValue() {
      this.$emit("getInputValue", this.inputValue);
    },

    countCompletedDeliveries() {
      const deliveries = this.order.deliveries;
      const dateNow = new Date();
      let count = 0;
      let day;

      deliveries.forEach((elem) => {
        const date = new Date(elem.date);
        if (date <= dateNow) {
          count++;
        }
      });

      this.inputValue = count;

      if (count === 1) day = "день";
      if (count > 1 && count < 5) day = "дня";
      if (count === 0 || count >= 5) day = "дней";

      return `${count} ${day}`;
    },

    firstDelivery() {
      const delivery = this.order.deliveries[0];
      let day = delivery.date.slice(8, 10);
      let month = new Date(delivery.date).getMonth();
      return `${day < 10 ? day.slice(1, 2) : day} ${this.months[month + 1]}`;
    },

    lastDelivery() {
      const delivery = this.order.deliveries[this.order.deliveries.length - 1];
      let day = delivery.date.slice(8, 10);
      let month = new Date(delivery.date).getMonth();
      return `${day < 10 ? day.slice(1, 2) : day} ${this.months[month + 1]}`;
    },

    daysLeft() {
      const num = this.order.deliveries.length - this.inputValue;
      let day;
      if (num === 1) day = "день";
      if (num > 1 && num < 5) day = "дня";
      if (num === 0 || num >= 5) day = "дней";
      return `${num} ${day}`;
    },
  },

  mounted() {
    this.getInputValue();
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