<template>
  <article :class="$style.container">
    <h2 :class="$style.title">
      Мои заказы <span :class="$style.ordersCount">2</span>
    </h2>
    <OrderCard />
    <OrderCard />
  </article>
</template>

<script>
import OrderCard from "@/components/order/OrderCard";

export default {
  components: {
    OrderCard,
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