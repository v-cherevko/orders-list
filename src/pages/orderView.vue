<template>
  <section>
    <OrderViewCard :order="getOrder[0]" />
  </section>
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
