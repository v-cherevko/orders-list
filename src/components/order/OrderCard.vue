<template>
  <div :class="$style.wrapper" @click="changeOrderID(order.id)">
    <router-link :class="$style.container" to="/order" exact>
      <ProgressBar :order="order" @getInputValue="nearestDelivery" />
      <div :class="$style.nearestDelivery" v-if="this.delivery">
        <div :class="$style.date">
          <span :class="$style.month">{{ getMonth }}</span>
          <span>{{ getDay }}</span>
        </div>
        <div :class="$style.delivery">
          <span>Ближайшая доставка</span>
          <span :class="$style.day">в {{ getDayOfWeek }} -</span>
          <span :class="$style.time">{{ getTime }}</span>
          <span :class="$style.place">{{ getAddress }}</span>
        </div>
      </div>
      <div :class="$style.complitedDeliveries" v-else>
        <h2 :class="$style.title">Все доставки выполнены</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
import ProgressBar from '@/components/common/ProgressBar'

import { date } from '@/application/date'

import { mapMutations } from 'vuex'

export default {
  components: {
    ProgressBar
  },

  props: {
    order: Object
  },

  data() {
    return {
      delivery: null
    }
  },

  computed: {
    getTime() {
      return `с ${this.delivery.interval.replace('-', 'до')}`
    },

    getDay() {
      const day = this.delivery.date.slice(8, 10)
      return day < 10 ? day.slice(1, 2) : day
    },

    getMonth() {
      const month = this.delivery.date.slice(5, 7)
      return date.shortMonths[month]
    },

    getDayOfWeek() {
      const day = new Date(this.delivery.date)
      return `${date.days[day.getDay()]}`
    },

    getAddress() {
      return this.delivery.address
    }
  },

  methods: {
    ...mapMutations(['changeOrderID']),

    nearestDelivery(value) {
      const nearestDelivery = this.order.deliveries[value]
      if (nearestDelivery === undefined) return
      this.delivery = JSON.parse(JSON.stringify(nearestDelivery))
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/styles/colors';
@import '@/assets/styles/fonts';

.wrapper {
  width: 100%;
}

.container {
  display: block;
  width: 100%;
  min-height: 15.5rem;
  margin: 0.625rem 0 0;
  padding: 1.563rem 1.063rem 1.063rem;
  background: $light-gray;
  border-radius: 0.375rem;

  .nearestDelivery {
    display: flex;
    margin: 1.454rem 0 0;

    .date {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 3.625rem;
      background: $blue;
      border-radius: 0.25rem;
      @include text;
      font-size: 1.25rem;
      line-height: 100%;
      color: $white;

      .month {
        font-size: 0.688rem;
        font-weight: normal;
      }
    }

    .delivery {
      display: flex;
      flex-direction: column;
      padding: 0.45rem 0 0.45rem 1.438rem;
      @include text;

      .day {
        color: $blue;
      }

      .time {
        margin: 0.5rem 0 0;
        font-size: 0.75rem;
      }

      .place {
        font-size: 0.75rem;
        font-weight: 500;
        color: $dark-gray;
      }
    }
  }

  .complitedDeliveries {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0 0;
    color: $blue;
  }
}
</style>