<template>
  <section :class="$style.container">
    <ProgressBar />
    <div :class="$style.nearestDelivery">
      <div :class="$style.date">
        <span :class="$style.month">Окт</span>
        <span>28</span>
      </div>
      <div :class="$style.delivery">
        <span>Ближайшая доставка</span>
        <span :class="$style.day">в понедельник -</span>
        <span :class="$style.time">с 10:00 до 12:00</span>
        <span :class="$style.place">Работа на объекте в Басма...</span>
      </div>
    </div>
  </section>
</template>

<script>
import ProgressBar from "@/components/basic/ProgressBar";

export default {
  components: {
    ProgressBar,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/colors";
@import "@/assets/styles/fonts";

.container {
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
}
</style>