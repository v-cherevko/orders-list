<template>
  <article :class="$style.container">
    <h2 :class="$style.title">
      Мои заказы <span :class="$style.ordersCount">{{ orders.length }}</span>
    </h2>
    <OrderCard v-for="order in orders" :key="order.id" :order="order" />
  </article>
</template>

<script>
import OrderCard from "@/components/order/OrderCard";

import { mapGetters } from "vuex";

export default {
  components: {
    OrderCard,
  },

  computed: {
    ...mapGetters({
      orders: "allOrders",
    }),
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/colors";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 18px;

  .title {
    width: 100%;
    font-size: 1.375rem;

    .ordersCount {
      font-weight: 400;
      font-size: 1.25rem;
      color: $dark-gray;
    }
  }
}
</style>