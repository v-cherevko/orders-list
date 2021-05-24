<template>
  <transition name="page" appear>
    <section :class="$style.orderViewPage">
      <OrderViewCard :order="getOrder[0]" />
    </section>
  </transition>
</template>

<script>
import OrderViewCard from "@/components/order/OrderViewCard";

import { mapGetters } from "vuex";

export default {
  components: {
    OrderViewCard,
  },

  computed: {
    ...mapGetters({
      getOrder: "oneOrder",
    }),
  },
};
</script>

<style lang="scss" module>
.orderViewPage {
  width: 100%;
}
</style>
