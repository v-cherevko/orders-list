<template>
  <section :class="$style.container">
    <router-link :class="$style.link" to="/" exact>Назад</router-link>
    <ProgressBar :class="$style.bar" :order="order" />
    <div :class="$style.deliveries">
      <h3 :class="$style.title">Доставки</h3>
      <div
        :class="$style.order"
        v-for="order in order.deliveries"
        :key="order.id"
      >
        <div :class="$style.wrapper">
          <img src="@/assets/icons/bag.svg" alt="bag" />
          <span :class="$style.date">{{ getDate(order.date) }}</span>
        </div>
        <div :class="$style.wrapper">
          <span :class="$style.time">{{ order.interval }}</span>
          <img src="@/assets/icons/arrow.svg" alt="arrow" />
        </div>
      </div>
      <div :class="$style.buttons">
        <Button>
          Дублировать заказ <img src="@/assets/icons/add.svg" alt="add" />
        </Button>
        <Button
          >Отменить заказ <img src="@/assets/icons/basket.svg" alt="basket" />
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
import ProgressBar from "@/components/common/ProgressBar";
import Button from "@/components/basic/Button";

export default {
  components: {
    ProgressBar,
    Button,
  },

  props: {
    order: Object,
  },

  data() {
    return {
      months: [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ],

      days: [
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
        "воскресенье",
      ],
    };
  },

  methods: {
    getDate(date) {
      const day = new Date(date).getDay();
      const result = date.split("-").reverse();
      return `${result[0] < 10 ? result[0].substring(1, 2) : result[0]} ${this.months[result[1]]}, ${this.days[day]}`;
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/fonts";

.container {
  padding: 1.875rem 0;

  .link {
    padding: 0 1.125rem;
    @include text;
    font-weight: 400;
    letter-spacing: -0.026rem;
    color: $blue;
  }

  .bar {
    margin: 1.375rem 1.125rem 2.125rem;
  }

  .deliveries {
    .title {
      margin: 0 1.125rem 1.75rem;
      @include text;
    }

    .order {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;

      &:nth-child(n + 3) {
        border-top: 1px solid $light-gray;
      }

      .wrapper {
        display: flex;
        align-items: center;
        margin: 0 1.125rem;
        @include subtext;
        font-weight: 400;

        .date {
          margin: 0 0 0 0.75rem;
        }

        .time {
          margin: 0 2.25rem 0 0;
        }
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 3rem 1.125rem;
    border-radius: 0.625rem;
  }
}
</style>