<template>
  <main :class="$style.app" id="app"><router-view /></main>
</template>

<script>
import { orders } from '@/application/orders'
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setOrders'])
  },

  mounted() {
    this.setOrders(orders)
  }
}
</script>

<style lang="scss" module>
.app {
  display: flex;
  overflow: hidden;
  position: relative;
}
</style>
