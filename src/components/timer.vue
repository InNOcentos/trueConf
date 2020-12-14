<template>
  <div class="timer">
    <p class="timer-counter">{{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: "timer",
  props: ["counter"],
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.timer {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
}
.timer-counter {
  margin: 0;
  display: flex;
  align-items: center;
}
</style>
