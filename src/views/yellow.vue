<template>
  <div>
    <screen
      :counterTime="counterTime"
      :colorIdx="colorIdx"
      :prevRoute="prevRoute"
    />
  </div>
</template>

<script>
import screen from "@/components/screen";
import { timeSettings } from "@/main.js";
export default {
  components: {
    screen,
  },
  data: () => ({
    counterTime: timeSettings.Yellow,
    colorIdx: 1,
    prevRoute: null,
  }),
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
};
</script>

<style>
</style>